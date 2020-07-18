import MDBase from './base';

export default class MDCompetitor extends MDBase {
  description: String = null;
  email: String = null;
  eventId: String = null;
  name: String = null;
  nationality: String = null;
  phone: String = null;
  _id: String = null;
  ratings: Object = {
    presentation: 0,
    taste: 0,
  };

  static parseList(infos) {
    return infos.map(info => new MDCompetitor(info));
  }

  constructor(info) {
    super();

    if (!info) return;
    this.parse(info);
  }
}
