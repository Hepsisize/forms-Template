import { format } from "date-fns";
export function produceHTML(info) {
  const { agree, email, name, mobile, whoDesign, firstAd, secondAd, thirdAd } =
    info;
  const {
    start: start1stAd,
    to: to1stAd,
    sendPhotosNow: sendPhotosNow1stAd,
    sendDesignDate: sendDesignDate1stAd,
  } = firstAd;
  const {
    start: start2ndAd,
    to: to2ndAd,
    sendPhotosNow: sendPhotosNow2ndAd,
    sendDesignDate: sendDesignDate2ndAd,
  } = secondAd;
  const {
    start: start3rdAd,
    to: to3rdAd,
    sendPhotosNow: sendPhotosNow3rdAd,
    sendDesignDate: sendDesignDate3rdAd,
  } = thirdAd;
  return `<html><style type="text/css">
.tg  {border-collapse:collapse;border-spacing:0;}
.tg td{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
  overflow:hidden;padding:10px 5px;word-break:normal;}
.tg th{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
  font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}
.tg .tg-axmw{font-size:18px;font-weight:bold;text-align:center;vertical-align:middle}
.tg .tg-cey4{border-color:inherit;font-size:16px;text-align:left;vertical-align:top}
.tg .tg-x5q1{font-size:16px;text-align:left;vertical-align:top}
.tg .tg-bn4o{font-size:18px;font-weight:bold;text-align:center;vertical-align:top}
.tg .tg-y0nj{background-color:#f8a102;font-weight:bold;text-align:center;vertical-align:top}
.tg .tg-im5s{background-color:#ffcb2f;font-weight:bold;text-align:left;vertical-align:top}
</style>
<table class="tg" style="undefined;table-layout: fixed; width: 681px">
<colgroup>
<col style="width: 232px">
<col style="width: 449px">
</colgroup>
<tbody>
  <tr>
    <td class="tg-y0nj" colspan="2">free 7 months ads - Hepsisize.net</td>
  </tr>
  <tr>
    <td class="tg-cey4">Name</td>
    <td class="tg-im5s">${name}</td>
  </tr>
  <tr>
    <td class="tg-x5q1">Email</td>
    <td class="tg-im5s">${email}</td>
  </tr>
  <tr>
    <td class="tg-x5q1">GSM</td>
    <td class="tg-im5s">${mobile}</td>
  </tr>
  <tr>
    <td class="tg-x5q1">Who will design</td>
    <td class="tg-im5s">${whoDesign}</td>
  </tr>
  <tr>
    <td class="tg-x5q1">Agree terms</td>
    <td class="tg-im5s">${agree ? "agreed" : "disagreed"}</td>
  </tr>
  <tr>
    <td class="tg-axmw" colspan="2">First Ad</td>
  </tr>
  <tr>
    <td class="tg-x5q1">Publish between</td>
    <td class="tg-im5s">${
      start1stAd ? format(start1stAd, "dd-MM-yyyy") : "-"
    }</td>
  </tr>
  <tr>
    <td class="tg-x5q1">And</td>
    <td class="tg-im5s">${to1stAd ? format(to1stAd, "dd-MM-yyyy") : "-"}</td>
  </tr>
  <tr>
    <td class="tg-x5q1">How I will send photos</td>
    <td class="tg-im5s">${sendPhotosNow1stAd || "-"}</td>
  </tr>
  <tr>
    <td class="tg-x5q1">Send design before</td>
    <td class="tg-im5s">${
      sendDesignDate1stAd ? format(sendDesignDate1stAd, "dd-MM-yyyy") : "-"
    }</td>
  </tr>
  <tr>
    <td class="tg-bn4o" colspan="2">Second Ad</td>
  </tr>
  <tr>
    <td class="tg-x5q1">Publish between</td>
    <td class="tg-im5s">${
      start2ndAd ? format(start2ndAd, "dd-MM-yyyy") : "-"
    }</td>
  </tr>
  <tr>
    <td class="tg-x5q1">And</td>
    <td class="tg-im5s">${to2ndAd ? format(to2ndAd, "dd-MM-yyyy") : "-"}</td>
  </tr>
  <tr>
    <td class="tg-x5q1">How I will send photos</td>
    <td class="tg-im5s">${sendPhotosNow2ndAd || "-"}</td>
  </tr>
  <tr>
    <td class="tg-x5q1">Send design before</td>
    <td class="tg-im5s">${
      sendDesignDate2ndAd ? format(sendDesignDate2ndAd, "dd-MM-yyyy") : "-"
    }</td>
  </tr>
  <tr>
    <td class="tg-bn4o" colspan="2">Third App</td>
  </tr>
  <tr>
    <td class="tg-x5q1">Publish between</td>
    <td class="tg-im5s">${
      start3rdAd ? format(start3rdAd, "dd-MM-yyyy") : "-"
    }</td>
  </tr>
  <tr>
    <td class="tg-x5q1">And</td>
    <td class="tg-im5s">${to3rdAd ? format(to3rdAd, "dd-MM-yyyy") : "-"}</td>
  </tr>
  <tr>
    <td class="tg-x5q1">How I will send photos</td>
    <td class="tg-im5s">${sendPhotosNow3rdAd || "-"}</td>
  </tr>
  <tr>
    <td class="tg-x5q1">Send design before</td>
    <td class="tg-im5s">${
      sendDesignDate3rdAd ? format(sendDesignDate3rdAd, "dd-MM-yyyy") : "-"
    }</td>
  </tr>
</tbody>
</table></html>`;
}
