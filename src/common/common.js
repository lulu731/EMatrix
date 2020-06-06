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
  };
  return text;
};

export function getBackgndAndUrgAndImp(uAndI) {
  const text = getUAndIText(uAndI);
  let bg = null;
  switch (uAndI) {
    case 'u&i':
      bg = 'bg-red';
      break;
    case 'nu&i':
      bg = 'bg-blue';
      break;
    case 'u&ni':
      bg = 'bg-light-blue';
      break;
    case 'nu&ni':
      bg = 'bg-green';
      break;
  };
  return {backGnd : bg , uAndI : text};
}
