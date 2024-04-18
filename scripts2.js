var sidebarOpen = false;
var sidebar = document.getElementById("sidebar");

// Nous définissons la fonction pour ouvrir sidebarOpen
function openSidebar(){
    if(!sidebarOpen) {
        sidebar.classList.add("sidebar-responsive");
        sidebarOpen = true;
    }
}

// Nous définissons la fonction pour fermer sidebarOpen
function closeSidebar(){
    if(sidebarOpen) {
        sidebar.classList.remove("sidebar-responsive");
        sidebarOpen = false;
    }
}

function afficherContenu(id) {
  // Cacher tous les contenus
  var contenus = document.querySelectorAll('.contenu');
  for (var i = 0; i < contenus.length; i++) {
      contenus[i].style.display = 'none';
  }

  // Afficher le contenu correspondant à l'onglet cliqué
  var contenu = document.getElementById(id);
  contenu.style.display = 'block';
}


// INSERRER ou DEFINISSION DES DONNEES

var barChartOptions = {
    series: [{
    name: "Chiffres d'affaires",
    type: 'column',
    data: [1083000, 1508000, 1684000, 2300000, 2224000, 3294000, 3982000]
  }, {
    name: 'Valeurs ajoutées',
    type: 'line',
    data: [918200, 1277000, 1347000, 1822000, 1460000, 2459000, 3200000]
  }],
    chart: {
    height: 500,
    type: 'line',
  },
  stroke: {
    width: [0, 2],
    colors: ['#40e248'],
  },
  dataLabels: {
    enabled: true,
    colors: ['#40e248'],
    enabledOnSeries: [0]
  },
  labels: [2016, 2017, 2018, 2019, 2020, 2021, 2022],
  xaxis: {
    type: 'Année'
  },
  yaxis: [{
    title: {
      text: "CA (millions d'euros)",
    },
  
  }, {
    opposite: true,
    title: {
      text: "VA (millions d'euros)"
    }
  }],
  colors: ['#08bebe','#40e248'],
  };


var barChart = new ApexCharts(document.querySelector("#bar-chart"), barChartOptions);
barChart.render();  


// GRAPHE2
  var options0 = {
    series: [{name: 'RCAI',data: [{x: 2016,y: 80900},{x: 2017,y: 54500},{x: 2018,y: -34200},{x: 2019,y:26300},{x: 2020,y: -39700},{x: 2021,y: 553400},{x: 2022,y: 400000}]
     }, 
     {name: 'Résultat Net',data: [{x: 2016,y: 62000},{x: 2017,y: 215000},{x: 2018,y: 199100},{x: 2019,y: 26000},{x: 2020,y: -398700},{x: 2021,y: 2326700},{x: 2022,y: 400000}]
  }],
    chart: {
    type: 'area',
    height: 500
  },
  dataLabels: {
    formatter: (val) => {
      return val / 1000 + 'K'
    }
  },
  stroke: {
    curve: 'straight'
  },
  xaxis: {
    type: 'datetime',
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false
    }
  },
  yaxis: {
    tickAmount: 4,
    floating: false,
  
    labels: {
      style: {
        colors: '#8e8da4',
      },
      offsetY: -7,
      offsetX: 0,
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false
    }
  },
  fill: {
    opacity: 0.5
  },
  tooltip: {
    x: {
      format: "yyyy",
    },
    fixed: {
      enabled: false,
      position: 'topRight'
    }
  },
  grid: {
    yaxis: {
      lines: {
        offsetX: -30
      }
    },
    padding: {
      left: 20
    }
  }
  };

var chart = new ApexCharts(document.querySelector("#area-chart"), options0);
chart.render();

// GRAPHE3
var graphe3 = {
    series: [
    {
      name: 'Actif immobilisé',
      data: [11600, 72900, 74000, 77000, 73700,138000,200000]
    },
    {
      name: 'Actif circulant',
      data: [351000, 696500, 950300, 1025100, 1340900,199600,200000]
    },
    {
      name: 'Créances',
      data: [334900, 696500, 835100, 748700, 887300,910500,950000]
    }
  ],
    chart: {
    type: 'bar',
    height: 500,
    width: 600,
    stacked: true,
  },
  stroke: {
    width: 1,
    colors: ['#fff']
  },
  dataLabels: {
    formatter: (val) => {
      return val / 1000 + 'K'
    }
  },
  plotOptions: {
    bar: {
      horizontal: false
    }
  },
  xaxis: {
    categories: ['2016','2017','2018','2019','2020','2021 ','2022']
  },
  fill: {
    opacity: 1,
  },
  colors: ['#80c7fd', '#008FFB', '#80f1cb'],
  legend: {
    position: 'top',
    horizontalAlign: 'left'
  }
  };

var bar3 = new ApexCharts(document.querySelector("#bar-chart1"), graphe3);
bar3.render();

//GRAPHE 3
var graphe4 = {
  series: [
  {
    name: 'Actif total',
    data: [362600,785600,1041000,1110000,1416300,2134600, 2505000]
  }
],
  chart: {
  type: 'bar',
  height: 500,
  width: 600,
  stacked: true,
},
stroke: {
  width: 1,
  colors: ['#fff']
},
dataLabels: {
  formatter: (val) => {
    return val / 1000 + 'K'
  }
},
plotOptions: {
  bar: {
    horizontal: false
  }
},
xaxis: {
  categories: ['2016','2017','2018','2019','2020','2021 ','2022'],
  labels: {
    formatter: (val) => {
      return val / 1000 + 'K'
    }
  }
},
fill: {
  opacity: 1,
},
colors: ['#888484'],
legend: {
  position: 'top',
  horizontalAlign: 'left'
}
};

var bar4 = new ApexCharts(document.querySelector("#bar-chart3"), graphe4);
bar4.render();

// Les données
document.addEventListener('DOMContentLoaded', function() {
  // Supposons que vous ayez un tableau de données, par exemple :
  const data = [
      { name: '2016', category: '362600' },
      { name: '2017', category: '785600' },
      { name: '2018', category: '1041000' },
      { name: '2019', category: '1110000' },
      { name: '2020', category: '1416300' },
      { name: '2021', category: '2134600' },
      { name: '2022', category: '2500000' },
      // Ajoutez d'autres données selon votre base de données
  ];

  const filterSelect = document.getElementById('filter');
  const tableBody = document.querySelector('#data-table tbody');

  // Fonction pour afficher les données en fonction du filtre
  function displayData(filter) {
      tableBody.innerHTML = ''; // Efface le contenu actuel de la table

      data.forEach(item => {
          // Si le filtre est "all" ou correspond à la catégorie de l'élément
          if (filter === 'all' || item.category === filter) {
              const row = document.createElement('tr');
              row.innerHTML = `<td>${item.name}</td><td>${item.category}</td>`;
              tableBody.appendChild(row);
          }
      });
  }

  // Écouteur d'événement pour le changement de filtre
  filterSelect.addEventListener('change', function() {
      const selectedFilter = filterSelect.value;
      displayData(selectedFilter);
  });

  // Affiche toutes les données au chargement initial
  displayData('all');
});


//PASSIF
var passif = {
  series: [
  {
    name: "",
    data: [362600,785600,1041000,1110000,1416300,2134600, 2505000],
  },
],
  chart: {
  type: 'bar',
  height: 500,
},
plotOptions: {
  bar: {
    borderRadius: 0,
    horizontal: true,
    distributed: true,
    barHeight: '80%',
    isFunnel: true,
  },
},
colors: ['#a6ecec','#90d0d0','#468686','#398686','#729797','#123e3e','#008080'],
dataLabels: {
  enabled: true,
  formatter: function (val, opt) {
    return opt.w.globals.labels[opt.dataPointIndex] 
  },
  dropShadow: {
    enabled: true,
  },
},
title: {
  text: 'Pyramid Chart',
  align: 'middle',
},
xaxis: {
  categories: ['2016','2017','2018','2019','2020','2021 ','2022'],
},
legend: {
  show: false,
},
};

var chart4 = new ApexCharts(document.querySelector("#bar-chart4"), passif);
chart4.render();


var passif2 = {
  series: [{
  name: 'Capitaux propres',
  data: [148000,354500, 553600, 569700, 522000, 920700, 903400]
}, {
  name: 'Dettes',
  data: [214200,431000, 487400, 540400, 894300, 1213900, 1290300]
}, {
  name: 'Total passif',
  data: [362600,785600, 1041000,1110000, 1416300, 2134600, 2193000]
}],
  chart: {
  type: 'bar',
  height: 500
},
plotOptions: {
  bar: {
    horizontal: false,
    columnWidth: '55%',
    endingShape: 'rounded'
  },
},
dataLabels: {
  enabled: false
},
stroke: {
  show: true,
  width: 2,
  colors: ['transparent']
},
xaxis: {
  categories: ['2016','2017','2018','2019','2020','2021 ','2022'],
},
colors: ['#40e248', '#ff6d00', '#037575'],
yaxis: {
  title: {
    text: '$ (millilers de dollars)'
  }
},
fill: {
  opacity: 1
},
tooltip: {
  y: {
    formatter: function (val) {
      return "$ " + val + " millilers de dollars"
    }
  }
}
};

var chart = new ApexCharts(document.querySelector("#area-chart4"), passif2);
chart.render();