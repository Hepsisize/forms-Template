export function produceHTML(formValues) {
  const {
    name,
    address,
    country,
    province,
    GSM,
    telephone,
    email,
    lifeStore,
    willSell,
    website,
    facebook,
    instagram,
    twitter,
    businessField,
    jobTypes,
  } = formValues;

  function joinArray2BTxt(arrayOfTexts) {
    const text = arrayOfTexts.join(", ");
    return text;
  }
  return `<html>
  <head>
    <style>
      table {
        margin: 10px auto;
      }
      .tg {
        border-collapse: collapse;
        border-spacing: 0;
      }
      .tg td {
        border-color: black;
        border-style: solid;
        border-width: 1px;
        font-family: Arial, sans-serif;
        font-size: 14px;
        overflow: hidden;
        padding: 10px 5px;
        word-break: normal;
      }
      .tg th {
        border-color: black;
        border-style: solid;
        border-width: 1px;
        font-family: Arial, sans-serif;
        font-size: 14px;
        font-weight: normal;
        overflow: hidden;
        padding: 10px 5px;
        word-break: normal;
      }
      .tg .tg-ip1c {
        background-color: #ffcb2f;
        font-size: 16px;
        font-weight: bold;
        text-align: left;
        vertical-align: top;
      }
      .tg .tg-k250 {
        background-color: #ffce93;
        border-color: inherit;
        color: #343434;
        font-family: Arial, Helvetica, sans-serif !important;
        font-size: 18px;
        text-align: left;
        vertical-align: top;
      }
      .tg .tg-oviw {
        background-color: #f8a102;
        border-color: inherit;
        font-weight: bold;
        text-align: center;
        vertical-align: top;
      }
      .tg .tg-g7sr {
        background-color: #ffcb2f;
        border-color: inherit;
        font-size: 16px;
        font-weight: bold;
        text-align: left;
        vertical-align: top;
      }
      .tg .tg-begf {
        background-color: #ffce93;
        color: #343434;
        font-family: Arial, Helvetica, sans-serif !important;
        font-size: 18px;
        text-align: left;
        vertical-align: top;
      }
    </style>
  </head>
  <body>
    <table class="tg" style="undefined;table-layout: fixed; width: 828px">
      <colgroup>
        <col style="width: 297px" />
        <col style="width: 531px" />
      </colgroup>
      <thead>
        <tr>
          <th class="tg-oviw" colspan="2">Summary of free registration</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="tg-k250">Name</td>
          <td class="tg-g7sr">${name}</td>
        </tr>
        <tr>
          <td class="tg-k250">Address</td>
          <td class="tg-g7sr">${address} ${province} ${country}</td>
        </tr>
        <tr>
          <td class="tg-begf">Telephone</td>
          <td class="tg-ip1c">${telephone || "-"}</td>
        </tr>
        <tr>
          <td class="tg-begf">GSM</td>
          <td class="tg-ip1c">${GSM}</td>
        </tr>
        <tr>
          <td class="tg-begf">Email</td>
          <td class="tg-ip1c">${email}</td>
        </tr>
        <tr>
          <td class="tg-k250">Life store name</td>
          <td class="tg-g7sr">${lifeStore || "-"}</td>
        </tr>
        <tr>
          <td class="tg-begf">Products example</td>
          <td class="tg-ip1c">${willSell || "-"}</td>
        </tr>
        <tr>
        <td class="tg-begf">Website</td>
        <td class="tg-ip1c">${website || "-"}</td>
        </tr>
        <tr>
        <td class="tg-begf">Facebook URL</td>
        <td class="tg-ip1c">${facebook || "-"}</td>
        </tr>
        <tr>
        <td class="tg-begf">Instagram URL</td>
        <td class="tg-ip1c">${instagram || "-"}</td>
        </tr>
        <tr>
        <td class="tg-begf">Twitter URL</td>
        <td class="tg-ip1c">${twitter || "-"}</td>
        </tr>
        <tr>
        <td class="tg-begf">Business field</td>
        <td class="tg-ip1c">${businessField}</td>
        </tr>
        <tr>
        <td class="tg-begf">Job type/s</td>
        <td class="tg-ip1c">${joinArray2BTxt(jobTypes)}</td>
        </tr>
      </tbody>
    </table>
  </body>
</html>
`;
}
