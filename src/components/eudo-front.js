import EdnField from "./ednField";
import EdnCat from "./ednCat";
import EdnCatX from "./ednCatX";
import EdnMemo from "./ednMemo";
import EdnNum from "./ednNum";
import EdnBtn from "./ednBtn";
import EdnDate from "./ednDate";
import EdnMail from "./ednMail";
import EdnPhone from "./ednPhone";
import EdnCheck from "./ednCheck";
import EdnSwitch from "./ednSwitch";
import EdnRadio from "./ednRadio";
import EdnTime from "./ednTime";
import EdnLine from "./ednLine";
import EdnColor from "./ednColor";
import EdnLoad from "./ednLoad";
import EdnUrl from "./ednUrl";
import EdnCopyPaste from "./ednCopyPaste";
import EdnListMod from "./ednListMod";
import EdnDateTime from "./ednDateTime";

const eudoFront = {
  install(Vue) {
    Vue.component("edn-field", EdnField);
    Vue.component("edn-cat", EdnCat);
    Vue.component("edn-cat-x", EdnCatX);
    Vue.component("edn-memo", EdnMemo);
    Vue.component("edn-num", EdnNum);
    Vue.component("edn-btn", EdnBtn);
    Vue.component("edn-date", EdnDate);
    Vue.component("edn-mail", EdnMail);
    Vue.component("edn-phone", EdnPhone);
    Vue.component("edn-check", EdnCheck);
    Vue.component("edn-switch", EdnSwitch);
    Vue.component("edn-radio", EdnRadio);
    Vue.component("edn-time", EdnTime);
    Vue.component("edn-line", EdnLine);
    Vue.component("edn-color", EdnColor);
    Vue.component("edn-load", EdnLoad);
    Vue.component("edn-url", EdnUrl);
    Vue.component("edn-copypaste", EdnCopyPaste);
    Vue.component("edn-list-mod", EdnListMod);
    Vue.component("edn-date-time", EdnDateTime);
  },
};

export {
  EdnField,
  EdnCat,
  EdnCatX,
  EdnMemo,
  EdnNum,
  EdnBtn,
  EdnDate,
  EdnMail,
  EdnPhone,
  EdnCheck,
  EdnSwitch,
  EdnRadio,
  EdnTime,
  EdnLine,
  EdnColor,
  EdnLoad,
  EdnUrl,
  EdnCopyPaste,
  EdnListMod,
  EdnDateTime,
};

export default eudoFront;
