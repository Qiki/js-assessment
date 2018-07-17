exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
  async: function(value) {
    return new Promise(resolve => {
      resolve(value);
    });
  },

  manipulateRemoteData: function(url) {
    return new Promise(resolve => {
      $.get(url, data => {
        let result  = data.people.map(p => {
          return p.name;
        });
        result.sort();
        resolve(result);
      })
    })
  }
};
