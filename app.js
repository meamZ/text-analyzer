function handleSubmit(){
  $(".js-text-form").submit(function(event){
    event.preventDefault();
    var text = $(this).find('#user-text').val();
    var words = getWords(text);
    $('.js-word-count').text(words.length);
    $('.js-un-word-count').text(getuniqueWordCount(words));
    $('.js-av-word-length').text(getavewordlength(words)+' characters');
    $('.text-report').removeClass('hidden');
  });
}

function getWords(text){
  return text.toLowerCase().split(/[\n ,!.";:-]+/).filter(Boolean);
}

function getuniqueWordCount(words){
  var uniquewords = [];
  words.forEach(function(word){
    if(uniquewords.find(function(a){return a === word;}) === undefined){
      uniquewords.push(word);
    }
  });
  return uniquewords.length;
}

function getavewordlength(words){
  var lengthssum = 0;
  for(var i = 0; i<words.length; i++){
    lengthssum += words[i].length;
  }
  return lengthssum/words.length;
}

$(function(){handleSubmit();});
