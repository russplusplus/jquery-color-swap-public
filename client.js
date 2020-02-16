$(document).ready(onReady);

// Global variables
let count = 0;
const colorArray = ['red', 'yellow', 'blue', 'green', 'purple', 'orange', 'bisque', 'cyan', 'salmon'];

function onReady(){
    console.log('jquery up in hurr');

    $('#generateBtn').on('click', generateColor);
    $('body').on('click', '.yellowBtn', turnYellow);
    $('body').on('click', '.deleteBtn', deleteRectangle);
    $('body').on('click', '.redBtn', turnRed);
    $('body').on('click', '.blueBtn', turnBlue);
    $('body').on('click', '.greenBtn', turnGreen);
    $('body').on('click', '.purpleBtn', turnPurple);
    $('body').on('click', '.orangeBtn', turnOrange);
    $('body').on('click', '.bisqueBtn', turnBisque);
    $('body').on('click', '.cyanBtn', turnCyan);
    $('body').on('click', '.salmonBtn', turnSalmon);
}

function generateColor(){
    count++;
    $('body').append(
        `
        <div class="redRectangle">
            <p>${count}</p>
            <p></p>
            <p><button class="yellowBtn">yellow</button><button class="deleteBtn">Delete</button></p>
        </div>
        `
    );
}

function turnYellow(){
    $(this).parent().parent().removeClass();
    $(this).parent().parent().addClass('yellowRectangle');
    let newColor = randomColor();    
    $(this).parent().prepend(`<button class="${newColor}Btn">${newColor}</button>`);
    $(this).remove();
}

function turnRed(){
    $(this).parent().parent().removeClass();
    $(this).parent().parent().addClass('redRectangle');
    let newColor = randomColor();
    $(this).parent().prepend(`<button class="${newColor}Btn">${newColor}</button>`);
    $(this).remove();
}

function turnBlue(){
    $(this).parent().parent().removeClass();
    $(this).parent().parent().addClass('blueRectangle');
    let newColor = randomColor();
    $(this).parent().prepend(`<button class="${newColor}Btn">${newColor}</button>`);
    $(this).remove();
}

function turnGreen(){
    $(this).parent().parent().removeClass();
    $(this).parent().parent().addClass('greenRectangle');
    let newColor = randomColor();
    $(this).parent().prepend(`<button class="${newColor}Btn">${newColor}</button>`);
    $(this).remove();
}

function turnPurple(){
    $(this).parent().parent().removeClass();
    $(this).parent().parent().addClass('purpleRectangle');
    let newColor = randomColor();
    $(this).parent().prepend(`<button class="${newColor}Btn">${newColor}</button>`);
    $(this).remove();
}

function turnOrange(){
    $(this).parent().parent().removeClass();
    $(this).parent().parent().addClass('orangeRectangle');
    let newColor = randomColor();
    $(this).parent().prepend(`<button class="${newColor}Btn">${newColor}</button>`);
    $(this).remove();
}

function turnBisque(){
    $(this).parent().parent().removeClass();
    $(this).parent().parent().addClass('bisqueRectangle');
    let newColor = randomColor();
    $(this).parent().prepend(`<button class="${newColor}Btn">${newColor}</button>`);
    $(this).remove();
}

function turnCyan(){
    $(this).parent().parent().removeClass();
    $(this).parent().parent().addClass('cyanRectangle');
    let newColor = randomColor();
    $(this).parent().prepend(`<button class="${newColor}Btn">${newColor}</button>`);
    $(this).remove();
}

function turnSalmon(){
    $(this).parent().parent().removeClass();
    $(this).parent().parent().addClass('salmonRectangle');
    let newColor = randomColor();
    $(this).parent().prepend(`<button class="${newColor}Btn">${newColor}</button>`);
    $(this).remove();
}

function deleteRectangle(){
    $(this).parent().parent().remove();
}

function randomColor(){
    return colorArray[Math.floor(Math.random()*colorArray.length)];
}