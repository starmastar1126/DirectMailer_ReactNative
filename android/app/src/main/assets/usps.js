var map;
var geojson;
var info;
var command;
var zipCode = 90001;

function showMap(lat, lng, data, zoomOffset) {
    // alert(lat + ":" + lng);
    var mapboxAccessToken = 'pk.eyJ1IjoibGVvbmFyZGJpbGxoIiwiYSI6ImNqdnI0NHNyODB1ZzE0OW1vM3pvcjR3OXEifQ.UDWLPCa1oIvG4s44rNtaGQ';
    map = L.map('mapid').setView([lat,lng], zoomOffset);
    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=' + mapboxAccessToken, {
        id: 'mapbox.streets',
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
    }).addTo(map);        
    geojson = L.geoJson(data, {
        style: style,
        onEachFeature: onEachFeature
    }).addTo(map);
}

function getColor(d) {
    return d > 1000 ? '#800026' :
            d > 500  ? '#BD0026' :
            d > 200  ? '#E31A1C' :
            d > 100  ? '#FC4E2A' :
            d > 50   ? '#FD8D3C' :
            d > 20   ? '#FEB24C' :
            d > 10   ? '#FED976' :
                        '#FFEDA0';
}

function style(feature) {
    return {
        fillColor: getColor(feature.properties.density),
        weight: 2,
        opacity: 1,
        color: 'black',
        dashArray: '3',
        fillOpacity: 0.7
    };
}

var busi_count = 0;
var res_count = 0;

function highlightFeature(e) {
    var layer = e.target;
    if(layer.options.fillColor == '#79c6a2') {
        layer.setStyle({
            weight: 2,
            color: '#666',
            fillColor: '#f2e774',
            dashArray: '',
            fillOpacity: 0.7
        });
        busi_count = busi_count - layer.feature.properties.BUS_CNT;
        res_count = res_count - layer.feature.properties.RES_CNT;
    } else {
        layer.setStyle({
            weight: 2,
            color: '#666',
            fillColor: '#79c6a2',
            dashArray: '',
            fillOpacity: 0.7
        });
        busi_count = busi_count + layer.feature.properties.BUS_CNT;
        res_count = res_count + layer.feature.properties.RES_CNT;        
        postMessage(JSON.stringify({"businessCount": busi_count,"residentialCount": res_count}));
    }
    if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
        layer.bringToFront();
    }
}

function resetHighlight(e) {
    geojson.resetStyle(e.target);
    info.update();
}

function zoomToFeature(e) {
    map.fitBounds(e.target.getBounds());
}

function onEachFeature(_feature, layer) {
    layer.on({click: highlightFeature});
}

var state_data = {
    "type": "FeatureCollection",
    features:[]
};
var properties_data = {};
var geometry_data = {
    "type": "Polygon",
    coordinates:[]
};
var coordinates_data=[];

function getMapData(lat, lng) {
    var zipUrl = "https://maps.googleapis.com/maps/api/geocode/json?latlng=" + lat + "," + lng + "&key=AIzaSyBBRSD5kHsHnoS3wOV7y-zNzXSjsuDuz1o"
    fetch(zipUrl).then(function(response) {
        return response.json();
    }).then(function(data) {
        for(var i = 0; i < data.results[0].address_components.length; i++){
            if(JSON.stringify(data.results[0].address_components[i].types) == "[\"postal_code\"]")
                zipCode = data.results[0].address_components[i].long_name;

        }
    }).catch(function() {});

    var url = "https://gis.usps.com/arcgis/rest/services/EDDM/selectZIP/GPServer/routes/execute?f=json&env%3AoutSR=4326&ZIP=" + zipCode.replace("\"", "") + "&Rte_Box=R&UserName=EDDM";
    // alert(url);
    fetch(url).then(function(response) {
        return response.json();
    }).then(function(data) {
        
        for(var i = 0; i < data.results[0].value.features.length; i++) {
            state_data.features.push({});
            state_data.features[i]["type"] = "Feature";
            state_data.features[i]["id"] = i;
            properties_data["name"] = data.results[0].value.features[i].attributes.FAC_NAME;
            properties_data["density"] = 10.00;
            properties_data["BUS_CNT"] = data.results[0].value.features[i].attributes.BUS_CNT;
            properties_data["RES_CNT"] = data.results[0].value.features[i].attributes.RES_CNT;
            state_data.features[i]["properties"] = properties_data;
            
            var coordinates_col = 0;
            geometry_data = {
            "type": "Polygon",
            coordinates:[]
            };
            geometry_data.coordinates = data.results[0].value.features[i].geometry.paths;
            state_data.features[i]["geometry"] = geometry_data;
            properties_data = {};
        }
        showMap(lat, lng, state_data, 15);
    }).catch(function() {});
}

document.addEventListener("message", function(event) {
    let json_data = JSON.parse(event.data);
    var lat = json_data.lat;
    var lng = json_data.lng;
    getMapData(lat, lng);
}, false);