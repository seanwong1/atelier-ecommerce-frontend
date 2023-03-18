const percentHelper = (val, total, dir = 0) => {
  if (dir) {
    return (Math.round(((total-Number(val))/total)*100));
  }
  return (Math.round((Number(val)/total)*100));
}

export default percentHelper;