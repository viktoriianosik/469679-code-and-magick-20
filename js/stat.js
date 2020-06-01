'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var BAR_GAP = 50;
var BAR_WIDTH = 40;
var BAR_HEIGHT_MAX = 150;
var TEXT_FONT = '16px PT Mono';
var TEXT_X = CLOUD_X + 3*GAP;
var TEXT_Y = CLOUD_Y + 3*GAP;
var TEXT_GAP = 20;
var START_X = CLOUD_X + 50;
var NAME_Y = 260;
var BAR_Y = 240;

var renderCloud = function(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var renderText = function (ctx, x, y, text) {
  ctx.font = TEXT_FONT;
  ctx.fillText(text, x, y);
}

var getMaxElement = function(arr) {
  var maxElement = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

window.renderStatistics = function(ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';
  renderText(ctx, TEXT_X, TEXT_Y, 'Ура вы победили!');
  renderText(ctx, TEXT_X, TEXT_Y + TEXT_GAP, 'Список результатов:');

  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    var result = Math.floor(times[i]);
    var barHeight = BAR_HEIGHT_MAX * times[i] / maxTime;
    var x = START_X + (BAR_WIDTH + BAR_GAP) * i;
    ctx.fillRect(START_X + (BAR_WIDTH + BAR_GAP) * i, BAR_Y, BAR_WIDTH, -barHeight);
    renderText(ctx, x, NAME_Y, players[i]);
    renderText(ctx, x, BAR_Y - barHeight  - GAP, result);
  }
};
