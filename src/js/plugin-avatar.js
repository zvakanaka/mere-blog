document.addEventListener('postLoaded', function avatar() {
  const usernameRegexArr = location.host.match(/^(.+).github.io/);
  if (usernameRegexArr) {
    const [, username] = usernameRegexArr;
    const section = document.createElement('section');
    section.classList.add('avatar-container');
    const avatar = document.createElement('img');
    // thanks!: https://stackoverflow.com/a/36380674/4151489
    avatar.setAttribute('src', `https://github.com/${username}.png?size=200`);
    avatar.setAttribute('alt', `GitHub Profile Picture for ${username}`);
    avatar.classList.add('avatar');
    section.appendChild(avatar);
    const navigation = document.querySelector('.navigation');
    // prepend avatar section
    navigation.insertBefore(section, navigation.firstChild);
  }
});
