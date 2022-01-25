function solved(array) {
  let songs = [];
  let Song = class {
    constructor(typeList, name, time) {
      this.typeList = typeList;
      this.name = name;
      this.time = time;
    }
  };

  let n = array.shift();
  let typeList = array.pop();
  for (let i = 0; i < n; i++) {
    let line = array[i].split("_");
    songs.push(new Song(line[0], line[1], line[2]));
  }

  if (typeList == "all") {
    for (const song of songs) {
      console.log(song.name);
    }
  } else {
    for (const song of songs) {
      if (song.typeList == typeList) {
        console.log(song.name);
      }
    }
  }
}
