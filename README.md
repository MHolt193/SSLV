# Streaming Service Library Viewer

I was sitting on my couch trying to find something to watch having to flip through all my streaming services,
and though to myself "I wish all these librarys could just be in one app." So I decided to try and make that happen for myself.

Now, I could Have just used one of the products I found in my search for an API that included deep links to each title, but where is the fun in that?

## Leveraged API's

With no backend experience I decided It would probably be best to look into some API's that would include links to titles of movies and tv shows on each streaming service. I found 1 API tha treally stood out. WatchMode.com has an amazing dataset and an API available for free for up to 1000 calls/month
So I decided to use watchmode's API. While setting up the watchmode api, I realised none of the movie or show posters are available through watchmode, at least that I could find. So I set out on another search and ended up landing on TheMoviedb.org another wonderful resource with a free API. With these two API's I was able to integrate the entire dataset that I would need for this app.  

### Technologies

This project was created using Reactjs, react-router, and custom CSS

### Project navbar

The navbar needed to be simple and intuitive so I used the Netflix android App navbar for inspiration.
On the navbar are 6 Items. A link to the home page in the top left corner, a search button, and a settings button in the top right corner.
On the second row are Three links, One to TV Shows, One to Movies, and one to Catagories. 
![image](https://user-images.githubusercontent.com/76035004/152691792-52ceb32e-15a2-4f6a-bea0-02264b3a3acd.png)


### Settings

After setting up the navbar I felt the most important feature on it was the setting button so that is what I tackled first.
I made an API call to watchmode and got a list of streaming services they had indexed (Well over 200 btw). Since there were so many options I tried to whittle it down to a few of the most popular streaming services here in the United States. 

The services I decided on were:
  * Netflix
  * Amazon Prime
  * Hulu
  * HBO-Max
  * Disney+
  * AppleTV+
  * Paramount+
  * Peacock
  * Peacock+
  * Discover+

I stored the Id's and names of these in a seperate js file and imported it into my Setting componet js file.
I mapped over these items and rendered them as a list on my settings modal.
I needed a way to save the selected services so useres would not have to re-select every time they visit the site so I leveraged localStorage.

![image](https://user-images.githubusercontent.com/76035004/152692314-16dd2e3b-ae1a-4067-b3c0-a6e14cac0526.png)

