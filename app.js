// Initialize GitHub & UI
const github = new GitHub();
const ui = new UI();

// Search input
const searchUser = document.getElementById('searchUser');

searchUser.addEventListener('keyup', (e) => {
  const userInput = e.target.value;
  if (userInput !== '') {
    // make http call
    github.getUser(userInput)
      .then(data => {
        if (data.profile.message === 'Not Found') {
          // Show alert user not found
          ui.showAlert('User not found', 'alert alert-danger')
          ui.clearProfile()
        } else {
          // Show profile
          ui.showProfile(data.profile);
          ui.showRepos(data.repos);
        }
      })
  } else {
    // clear profile
    ui.clearProfile()
  }
});