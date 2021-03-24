# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Robert Au**

Time spent: **7** hours spent in total

Link to project: (https://glitch.com/edit/#!/materialistic-cookie-bacon)

## Required Functionality

The following **required** functionality is complete:

* [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [x] "Start" button toggles between "Start" and "Stop" when clicked. 
* [x] Game buttons each light up and play a sound when clicked. 
* [x] Computer plays back sequence of clues including sound and visual cue for each button
* [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [x] User wins the game after guessing a complete pattern
* [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [x] Buttons use a pitch (frequency) other than the ones in the tutorial
* [x] More than 4 functional game buttons
* [x] Playback speeds up on each turn
* [x] Computer picks a different pattern each time the game is played
* [x] Player only loses after 3 mistakes (instead of on the first mistake)
* [x] Game button appearance change goes beyond color (e.g. add an image)
* [x] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn


## Video Walkthrough

This is an example of a loss in the game:
![gameloss](https://cdn.glitch.com/6aaaa4ca-0282-4d86-991c-9b7dcc96f872%2Floss.gif?v=1616561885862)
And here's an example of a win in the game (with the help of DevTools):
![gamewin](https://cdn.glitch.com/6aaaa4ca-0282-4d86-991c-9b7dcc96f872%2Fwin.gif?v=1616561887133)

## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
- <https://developer.mozilla.org/en-US/docs/web/javascript/reference/global_objects/math/random> MDN Web Docs to generate random numbers for different patterns
- <http://clipart-library.com/> Clipart Library for the animal pictures
- <http://www.cfs-technologies.com/home/> Speakonia for generating the audio via TTS
- <https://stackoverflow.com/questions/9595258/button-element-styled-with-css-is-not-showing-the-background-image-in-ie6> Needed help on formatting image in button
- <https://stackoverflow.com/questions/9507774/how-to-make-background-image-shrink-proportionally-to-fit-button-size-in-javascr> To resize image to fit button

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 
> One challenge I encountered was implementing the optional function of images showing up when you click the buttons. At first, I planned on overlaying an image on top of the button, but then I realized I would have to mess with the positioning of the images so that they would have to appear on top of their corresponding buttons, so I wanted to think of a better way. Then I tried to place the image as the content of the button, but when the button was interacted with, the button would move up or down and looked weird. I realized a more elegant solution by making the `background` of the button be the picture, removing the need for putting image tags in the button. By making the pictures transparent, I retained `background-color` for the buttons.

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 
> Do developers of components/frameworks try to change features that make them different from their competitors? For instance, I've read that the MERN stack is more suitable for large projects because data flow in React is unidirectional, while the MEAN stack is more suitable for small projects because data flow in Angular is bidirectional. 

> Why do browsers support ES6 but not the more recent ones such as ES10? Do they not want to support the features of the later versions?

> What are some examples of personal projects and professional projects using the web stack?

> When developing a project, how do I know when to use the web developing tools versus software developing tools? 

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 
> If I had spent more time on this project, I would add a ticking timer, overhead text that tells you when it is your turn, difficulty settings (easy, medium, hard), and randomizing sounds that come from the buttons, since mixed up sounds is what makes the game harder. Maybe cycle the images to different buttons to make the game harder. I didn't really spend much time on adding unique audio, as they are just Text-to-Speech clips, if I had more time I would use animal noises, but I had trouble finding free sounds. In addition, I would've redone the `playAudio` to repeat the animal noises for a set time, similar to how the `playTone` had helper functions `startTone` and `stopTone`.



## License

    Copyright [Robert Au]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.