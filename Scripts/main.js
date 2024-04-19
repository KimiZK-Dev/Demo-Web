async function getHoChiMinhTime() {
  try {
    const response = await fetch('https://worldtimeapi.org/api/timezone/Asia/Ho_Chi_Minh');
    const data = await response.json();
    const unixTime = data.unixtime;

    const date = new Date(unixTime * 1000);
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');

    document.querySelector('.time').textContent = `${hours}:${minutes}:${seconds}`;
  } catch (error) {
    console.error('Error fetching Ho Chi Minh time:', error);
  }
}


async function getCountryAndIP() {
  try {
    const response = await fetch('https://ipinfo.io/json');
    const data = await response.json();
    const country = data.country;
    const yourIP = data.ip;

    const regionNames = new Intl.DisplayNames(['en'], { type: 'region' });
    const formattedCountry = regionNames.of(country);

    document.querySelector('.country').textContent = formattedCountry;
    document.querySelector('.yourIP').textContent = yourIP;
  } catch (error) {
    console.error('Error fetching country and IP:', error);
  }
}


const startTime = Date.now();
function calculateUptime() {
  const currentTime = Date.now();
  const uptimeInSeconds = (currentTime - startTime) / 1000;

  const days = String(Math.floor(uptimeInSeconds / 86400)).padStart(2, '0');
  const hours = String(Math.floor((uptimeInSeconds % 86400) / 3600)).padStart(2, '0');
  const minutes = String(Math.floor((uptimeInSeconds % 3600) / 60)).padStart(2, '0');
  const seconds = String(Math.floor(uptimeInSeconds % 60)).padStart(2, '0');

  const uptimeString = `${days} days, ${hours} hours, ${minutes} minutes, and ${seconds} seconds`;
  document.querySelector('.onlTime').textContent = uptimeString;
}

getHoChiMinhTime();
getCountryAndIP();
calculateUptime();

setInterval(getHoChiMinhTime, 1000); 
setInterval(calculateUptime, 1000);    z``
