const imagePaths = [
    'https://via.placeholder.com/180/FFD700/000000?text=Rivanola+1', 
    'https://via.placeholder.com/180/ADD8E6/000000?text=Rivanola+2', 
    'https://via.placeholder.com/180/90EE90/000000?text=Rivanola+3'  
];
let currentIndex = 0;


document.addEventListener('DOMContentLoaded', () => {
    const profilePic = document.getElementById('profile-pic');
    
    profilePic.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % imagePaths.length; 
        profilePic.src = imagePaths[currentIndex]; //
    });
});