# Real Book API

Description:
This API allows for the user to search for and contribute versions of "Real Book" jazz pieces for the world to use.

Installation:
N/A


Endpoints:

Returns artist

/artist

returns a list of songs by that artist
example output: /artist/duke_ellington/a_train
```
[
    {
        "artist": "Duke Ellington",
        "songs": "Take the A train"
    }
]
```
/artist/{artist}/pieces

songs/key

returns a list of pieces in a key
example output: /songs/key-G/all_blues
```
[
    {
        "key": "G"
        "songs": "all_blues", "...", "..."
    }
]
```
/songs/{key}



/period
returns a list of artists of a period of time.
example output: /period/1950

```
[
    {
        "period": "1950"
        "artists": "Duke_Ellington", "...", "..."
    }
]
```
/period/1950


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
