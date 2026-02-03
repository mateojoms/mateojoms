const SHEET_NAME = 'Cards';

/**
 * Entry point for Web App
 */
function doGet() {
  return HtmlService.createTemplateFromFile('index')
      .evaluate()
      .setTitle('Village Enterprise IT Tips')
      .addMetaTag('viewport', 'width=device-width, initial-scale=1.0');
}

/**
 * Include HTML partials
 */
function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}

/**
 * Get all tips from the sheet
 */
function getTips() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) return [];

  const data = sheet.getDataRange().getValues();
  const headers = data.shift();

  return data.map(row => {
    const tip = {};
    headers.forEach((header, i) => tip[header] = row[i]);
    return tip;
  });
}

/**
 * Add a new tip
 */
function addTip(tip) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName(SHEET_NAME);

  if (!tip.ID) {
    tip.ID = Utilities.getUuid();
  }
  tip.Timestamp = new Date();

  const headers = sheet.getDataRange().getValues()[0];
  const row = headers.map(h => tip[h] || '');
  sheet.appendRow(row);
  return tip;
}

/**
 * Update an existing tip by ID
 */


/**
 * Delete tip by ID
 */

// Returns the email of the logged-in user
function getUserEmail() {
  return Session.getActiveUser().getEmail();
}


