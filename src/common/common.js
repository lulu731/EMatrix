
/**
 * @module
 */

/**
 * Gets task importance and urgency
 * @param  {string} uAndI set (u&i, nu&i, u&ni, nu&ni)
 * @return {string}       text to be displayed for task
 */
export function getUAndIText(uAndI) {
  let text = null;
  switch (uAndI) {
    case 'u&i':
      text = 'Urgent & Important';
      break;
    case 'nu&i':
      text = 'not Urgent & Important';
      break;
    case 'u&ni':
      text = 'Urgent & not Important';
      break;
    case 'nu&ni':
      text = 'not Urgent & not Important';
      break;
    default:
      text = 'Text undefined';
      break;
  };
  return text;
};

/**
 * Gets text and colors
 * @param  {string} uAndI set (u&i, nu&i, u&ni, nu&ni)
 * @return {object}       {uAndIText, textColor, backGndColor}
 */
export function getColorAndUrgAndImpText(uAndI) {
  const text = getUAndIText(uAndI);
  let color = null;
  let bg = null;
  switch (uAndI) {
    case 'u&i':
      color = 'red';
      bg = 'bg-red';
      break;
    case 'nu&i':
      color = 'blue';
      bg = 'bg-blue';
      break;
    case 'u&ni':
      color = 'light-blue';
      bg = 'bg-light-blue';
      break;
    case 'nu&ni':
      color = 'green';
      bg = 'bg-green';
      break;
    default:
      break;
  };
  return {uAndIText : text, textColor : color, backGndColor : bg};
}
