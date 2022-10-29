# Streaming Service Library Viewer

I was sitting on my couch trying to find something to watch having to flip through all my streaming services,
and thought to myself "I wish all these libraries could just be in one app." So I decided to try and make that happen for myself.

Now, I could Have just used one of the products I found in my search for an API that included deep links to each title, but where is the fun in that?

## Live Version
a live version can be accesed at https://sslv.netlify.app
the watchmode API free teir that is used only comes with 1000 api calls per month so it may be out of calls.


## Leveraged API's

With no backend experience I decided It would probably be best to look into some API's that would include links to titles of movies and tv shows on each streaming service. I found 1 API that really stood out. WatchMode.com has an amazing dataset and an API available for free for up to 1000 calls/month
So I decided to use watchmode's API. While setting up the watchmode api, I realised none of the movie or show posters are available through watchmode, at least that I could find. So I set out on another search and ended up landing on TheMoviedb.org another wonderful resource with a free API. With these two API's I was able to integrate the entire dataset that I would need for this app.  

## Technologies

This project was created using Reactjs, react-router, and custom CSS

## Project navbar

The navbar needed to be simple and intuitive so I used the Netflix android App navbar for inspiration.
On the navbar are 6 Items. A link to the home page in the top left corner, a search button, and a settings button in the top right corner.
On the second row are Three links, One to TV Shows, One to Movies, and one to Catagories. 

![image](https://user-images.githubusercontent.com/76035004/152691792-52ceb32e-15a2-4f6a-bea0-02264b3a3acd.png)


## Settings

After setting up the navbar I felt the most important feature on it was the settings button so that is what I tackled first.
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

## Search
The search button was not working at first but eventually I set it up so that on click an animated searchbar would grow next to the search button. On submit the search results page would render and you would see the title you searched for 

![image](https://user-images.githubusercontent.com/76035004/152695237-e7fa78a6-00ae-42ae-9fb6-f77ee43c1658.png)


## Home Page

The Home Page was originally just going to be a list of all titles available on your selected streaming services but, I decided, It needed to have a little more substance. So I Included a "Featured Title" section above the list of titles. 
the list of titles are obtained through an API call to the watchmode API. The response from the api is then saved in a variable called apiResponse using the React Hook useState. the response is then mapped over with each item being rendered as a MovieCard component with information being passed to the component as props. 

![image](https://user-images.githubusercontent.com/76035004/152693059-48d88492-c22c-4cdb-be11-ce5ff025c462.png)

  The Featured Title component is rendered above the title list and it is a random title on the page. 
The random number is calculated one time on page load inside of a useEffect hook and stored in a useState hook so that the title does not change at unintended times.

![image](https://user-images.githubusercontent.com/76035004/152694602-667a8ecb-b387-413c-8187-fbcddc920499.png)

There is also a my List feature on the home page. This is another feature that utilises localStorage to remember what was on the list each visit. each title added to the list renders a new movie in the my list section which is situated right below the featured title section and above the movie list section.

![image](https://user-images.githubusercontent.com/76035004/152695426-21f1f9c8-345e-4a60-bf53-f1bc738e254e.png)

## Tv Shows & Movies

The tv shows section and the movies section are not as meaty as the home page. They both make an api call uppon rendering to their respective endpoints on the watchmode api. 

![image](https://user-images.githubusercontent.com/76035004/152696013-73e17fe1-8ca2-4f84-a29e-4c0c3cd517e7.png)

 ## Catagories

The catagories page renders as a list of catagories and uppon selecting a catagory another API call is sent to the respective endpoint for that catagory and a list of titles is rendered.

![image](https://user-images.githubusercontent.com/76035004/152696367-a41b3526-fe13-4bf5-87da-c5ef543f9f5d.png)

## Title Info

When a MovieCard is clicked on, a title info modal with render. This modal contains the title poster, a description of the title, and a viewer rating. Clicking on the title poster will bring you directly to that title on the streaming platform it is available on. 

![image](https://user-images.githubusercontent.com/76035004/152696653-334078e3-c83b-41fb-b3f6-380cf94f113f.png)
