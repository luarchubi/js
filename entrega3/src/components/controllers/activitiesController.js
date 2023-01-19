const activityController = async () => {
  const response = await fetch("src/components/data/programa.json");
  const data = await response.json();
  return data;
};
