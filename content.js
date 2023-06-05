async function getData() {
  const data = await fetch('http://localhost:5500/data.json').then((res) => res.json());
  console.log('test A');
  return data;
}

const run = async () => {
  const contentData = await getData();
  console.log(contentData);
  console.log('test B');

  const table = document.querySelector('section#content');

  // console.log(table)
  for (let i = 0; i < contentData.length; i++) {
    table.innerHTML += `
    <div class="card">
      <img src="${contentData[i].image}" />
      <span class="capitalize">${contentData[i].type}</span>
    </div>
    `;
  }
};

run();
