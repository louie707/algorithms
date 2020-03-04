const noteSearch = (noteText, magazineText) => {
    const search = noteText.split(" ");
    const magazine = magazineText.split(" ");
    let hash = {};
    
    magazine.forEach(word => {
        if(!hash[word]) {
            hash[word] = 0;   
        }
        hash[word]++;  
    })
    
    let noteAvailable = true;
    search.forEach(word => {
        if(hash[word]){
            hash[word]--;
            if(hash[word] < 0){
                noteAvailable = false
            }
        }
        else {
            noteAvailable = false;
        }
    });
    console.log(noteAvailable);
}

noteSearch('this is a secret note for you from a secret admirer',
            'puerto rico is a place of great wonder and excitement it has many secret waterfall locations that i am an admirer of you must hike quite a distance to find the secret places as they are far from populated areas but it is worth the effort a tip i have for you is to go early in the morning when it is not so hot out also note that you must wear hiking boots this is one of the best places i have ever visited');
