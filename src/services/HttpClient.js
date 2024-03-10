export const searchMusic = async (word = "popular") => {
    const formatted = word.replace(" ","+")
    const result = await fetch('https://itunes.apple.com/search?entity=song&attribute=allArtistTerm&term=' + formatted)
    const data = await result.json()
    return data.results
}


export const searchMusicByGenre = async (word = "popular") => {
    const formatted = word.replace(" ","+")
    const result = await fetch('https://itunes.apple.com/search?entity=song&attribute=genreIndex&term=' + formatted)
    const data = await result.json()
    return data.results
}

export const searchMusicByCountry = async (word = "popular") => {
    const formatted = word.replace(" ","+")
    const result = await fetch('https://itunes.apple.com/search?entity=song&country=' + formatted)
    const data = await result.json()
    return data.results
}

