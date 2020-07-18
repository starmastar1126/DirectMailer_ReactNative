import MDBase from './base';
// import MDUser from './MDUser';

export default class MDComment extends MDBase {
  clashId: String = null;
  comment: String = null;
  opponentId: String = null;
  userId: String = null;
  user: Object = null;
  createdAt: Date = null;
  _id: String = null;

  static parseList(infos) {
    return infos.map(info => new MDComment(info));
  }

  constructor(info: Object) {
    super();

    if (!info) return;
    this.parse(info);
    this.user = info.user;
    this.createdAt = info.createdAt;
  }
}
