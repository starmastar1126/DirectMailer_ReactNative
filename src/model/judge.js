import MDBase from './base';

export class MDJudgeQty extends MDBase {

  static parseList(infos: Array<Object>) {
    return infos.map(info => new MDJudgeQty(info));
  }

  constructor(info: Object) {
    super();
    if (!info) return;

    this.parse(info);
  }
}

export default class MDJudge extends MDBase {
  judgeQty: Number = 0;
  hasVoted: Boolean = false;

  static parseInfo(info: Object) {
    return new MDJudge(info);
  }

  constructor(info: Object) {
    super();
    if (!info) return;

    this.parse(info);
  }
}
