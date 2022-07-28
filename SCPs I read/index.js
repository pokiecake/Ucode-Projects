let list = $("#list");
let scpCount = $("#scpCount");
let search = $("#search");

scps = scps.split("\n");
scpCount.text(scps.length);

function sortSCPs(a, b) {
  if (/SCP/.test(a) && /SCP/.test(b)) {
    let aNum = a.split("SCP-").split(" ")[0];
    let bNum = b.split("SCP-").split(" ")[0];
    
    return aNum - bNum;
  } else {
    if (!/SCP/.test(a) && !/SCP/.test(b)) {
      
    } else if (!/SCP/.test(a)) {
      return 1;
    } else if (!/SCP/.test(b)) {
      return -1;
    }
  }
}

search.keydown(() => {
  let val = search.val();
  let scpList = scps.split("<br>");
  scpList.forEach((scp, index) => {
    if (!scp.includes(val)) {
      scpList.splice(index, 1);
    }
  });
  scpList = scpList.sort();
  scpList = scpList.join(`<br>`);
  list.html(scps);
});

scps = scps.sort();
scps = scps.join(`<br><br>`);
list.html(scps);
