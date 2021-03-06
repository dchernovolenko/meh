var svg = document.getElementById("thing");
var toggle = document.getElementById("toggle");
var head = document.getElementById("head");
var t = 0;
var guessX = 0;
var guessY = 0;
var x = Math.random()*500;
var y = Math.random()*500;

var n = [78.9, 78.8, 78.8, 78.7, 78.7, 78.5, 78.2, 78.1, 77.8, 77.6, 77.5, 77.6, 77.0, 77.0, 76.8, 76.7, 76.7, 76.5, 76.1, 75.8, 75.7, 75.5, 75.8, 75.5, 75.4, 75.1, 74.9, 74.9, 74.7, 74.7, 74.7, 74.6, 74.5, 74.1, 73.7, 73.9, 73.5, 73.3, 72.9, 72.6, 72.0, 71.4, 71.2, 71.1, 70.8, 70.5, 70.2, 70.5, 70.2, 70.2, 70.2, 69.9, 70.1, 70.2, 69.7, 69.9, 69.6, 69.5, 69.7, 69.6, 69.6, 68.8, 68.6, 68.4, 68.2, 68.0, 67.2, 66.8, 66.7, 65.9, 65.2, 63.3, 66.2, 64.8, 62.9, 63.7, 63.5, 60.0, 58.5, 61.7, 61.1, 63.3, 62.1, 61.1, 59.7, 57.1, 56.8, 60.4, 56.7, 59.0, 59.7, 57.2, 59.6, 60.8, 54.1, 54.7, 39.1, 50.9, 51.7, 54.5, 54.2, 52.5, 53.5, 52.6, 50.0, 52.1, 51.1, 47.6, 48.7, 48.7, 47.6, 50.5, 51.5, 49.1, 47.3];
var g =[2015, 2014, 2013, 2012, 2011, 2010, 2009, 2008, 2007, 2006, 2005, 2004, 2003, 2002, 2001, 2000, 1999, 1998, 1997, 1996, 1995, 1994, 1993, 1992, 1991, 1990, 1989, 1988, 1987, 1986, 1985, 1984, 1983, 1982, 1981, 1980, 1979, 1978, 1977, 1976, 1975, 1974, 1973, 1972, 1971, 1970, 1969, 1968, 1967, 1966, 1965, 1964, 1963, 1962, 1961, 1960, 1959, 1958, 1957, 1956, 1955, 1954, 1953, 1952, 1951, 1950, 1949, 1948, 1947, 1946, 1945, 1944, 1943, 1942, 1941, 1940, 1939, 1938, 1937, 1936, 1935, 1934, 1933, 1932, 1931, 1930, 1929, 1928, 1927, 1926, 1925, 1924, 1923, 1922, 1921, 1920, 1919, 1918, 1917, 1916, 1915, 1914, 1913, 1912, 1911, 1910, 1909, 1908, 1907, 1906, 1905, 1904, 1903, 1902, 1901, 1900];

var scaleX = function(n) {
    return (n - 1900) * 3.62 + 50;
  };
  
  var scaleY = function(n) {
    return 450-((n - 47)*13.7);
  };

  var scaleY2 = function(n) {
    return (n - 47)*14.04;
  };
  var scaleX2 = function(n) {
    return 467-((n - 1900) * 3.62);
  };
var draw = function(){
    var sge = d3.select("svg")
    var circs = sge.selectAll("circle").data(n).enter();
    yuh = circs.append("circle");
    console.log(circs)
    yuh.attr("r", function(d){return 5})
    yuh.attr("fill", function(d){return "red";})
    yuh.attr("cy", function(d){return scaleY2(d)})
    yuh.attr("cx", function(d, i){return scaleX2(g[i])})
}
var points = function() {
    sge=d3.select(svg)
    sge.append("text").attr("x", 250 ).attr("y", 480 ).text("Year");
    sge.append("line").attr("x1", 50).attr("x2", 50).attr("y1", 0).attr("y2", 450).attr("style", "stroke:rgb(0,0,0);stroke-width:2");
    for (var i = 1900; i <= 2015; i+=23) {
      sge.append("text").attr("x", scaleX(i)).attr("y", 470).text(i);
    }
    sge.append("text").attr("x", 20 ).attr("y", 300 ).attr("transform", "rotate(270 20 300)").text("Life expectancy (years)");
    sge.append("line").attr("x1", 50).attr("x2", 500).attr("y1", 450).attr("y2", 450).attr("style", "stroke:rgb(0,0,0);stroke-width:2");
    for (i = 79; i >= 47; i-=4) {
      sge.append("text").attr("x", 25).attr("y", scaleY(i)).text(i);
    }
  };

draw()
points()