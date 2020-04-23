# H1 Real Book API

Description:
This API allows for the user to search for and contribute versions of "Real Book" jazz pieces for the world to use.

Installation:
N/A


Endpoints:

Returns artist

/artist

returns a list of songs by that artist
example output: /artist/duke_ellington/a_train

[
    {
        "artist": "Duke Ellington",
        "pieces": "Take the A train"
    }
]

/artist/{artist}/pieces

/pieces

returns a list of pieces in a key
example output: /pieces/key-G/all_blues

[
    {
        "key": "G"
        "pieces": "all_blues", "...", "..."
    }
]

/pieces/{key}
