// listen for text/submit
  // grab text
    // add html element using text

function itemAdder() {
    $('#js-shopping-list-form').submit( event => {
        event.preventDefault();
        //const newItem = $(this).find('input[name="shopping-list-entry"]');
        const newItem = $('#shopping-list-entry').val();

        const results = [];
        results.push($(`
            <li>
              <span class="shopping-item">${newItem}</span>
              <div class="shopping-item-controls">
                <button class="shopping-item-toggle">
                  <span class="button-label">check</span>
                </button>
                <button class="shopping-item-delete">
                  <span class="button-label">delete</span>
                </button>
              </div>
            </li>`));
        $('.shopping-list').append(results);   
    });
}

// listen for check button
  // toggle checked item

function itemToggler() {
    $('ul').on('click', 'button.shopping-item-toggle', function(event) {
        //$(this).closest('span').toggleClass('shopping-item__checked')
        $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked')
    });    
}  

// listen for delete button
  // delete cooresponding item 

function itemRemover() {
    $('ul').on('click', 'button.shopping-item-delete', function(event) {
        $(this).closest('li').remove();
    });
}

function main() {
    itemAdder();
    itemToggler();
    itemRemover();
}

$(main);