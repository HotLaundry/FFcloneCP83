const expect = require("chai").expect;
const depthchart = require("../lib/depthchart.js");

describe('depthchart library', function () {
  it('Should return a depth chart object', function () {
    let teamname = 'JAX';
    let position = 'qb'
    return depthchart.getRoster(teamname, position).then(function(value) {
      expect(Object.keys(value).length).to.equal(5);
      expect(value.roster).to.not.empty;
      expect(value.url).to.be.a.string;
      expect(value.teamname).to.be.a.string;
      expect(value.logo).to.be.a.string;
      expect(value.positionName).to.equal('quarterback');
    });
  });

});