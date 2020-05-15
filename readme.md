# Real Book API

Description:
This API allows for the user to search for and contribute information about Jazz standards and the artists who made them from the 'Real Book'

Install with:
npm install

Run server with:
npm start


Endpoints:

Returns artist

/artist

returns a list of all of the artists and their information
example output: /artist
```
[
    {
        "artist": "Duke Ellington",
        "songs": "Take the A train"
    }

    {
        "artist": "John Coltrane",
        "songs": "Equinox"
    }
]
```

Return a specific artist
/artist/:artistName
example output: /artist/Charles Mingus
```
[
    {
        "artist": "Charles Mingus",
        "songs": "Moanin"...
        "period": "1950"....
    }
]

```
/songs/{key}

returns a list of pieces in a given key
example output: /key/G minor
```
[
    {
        "key": "G"
        "songs": "all_blues", "...", "..."
    }
]
```



/songs/{song_name}
returns a list of information about a song.
example output: /songs/all_blues
```
[
    {
        "songs": "all_blues"
        "artists": "Miles Davis", "...", "..."
        "key": "G"
        "period": "1950"
    }
]
```
