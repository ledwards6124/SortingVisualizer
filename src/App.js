import logo from './logo.svg';
import './App.css';
import React from 'react';
import SortBox from './SortBox';
import Slider from './Slider';
import ShuffleBars from './ShuffleBars';
import Sort from './Sort';

class App extends React.Component {

  state = {
    bars: Array(10).fill().map((_, index) => index + 1),
    method: 'No method selected...',
    delay: 0.5,
    sorting: false
  }

  updateBars = (size) => {
    let newBars = [];
    for (let i = 1; i < size; i ++) {
      newBars.push(i);
    }
    this.setState({bars: newBars})
  }

  updateDelay = (newDelay) => {
    this.setState({delay: newDelay})
  }



  shuffleBars = () => {
    let newBars = Array(this.state.bars.length);
    let existing = new Set();
    this.state.bars.map(bar => {
      let rIndex = this.getRandomNumber(0, this.state.bars.length);
      do {
        rIndex = this.getRandomNumber(0, this.state.bars.length);
      } while (existing.has(rIndex));
      existing.add(rIndex);
      newBars[rIndex] = bar;
    });
    this.setState({bars: newBars});
  }

  getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  getMethod() {
    if (this.state.method === '') {
      return 'No sorting algorithm selected...'
    }
    return this.state.method;
  }

  barsAreSorted() {
    for (let i = 0; i < this.state.bars.length - 1; i ++) {
      if (this.state.bars[i] > this.state.bars[i + 1]) {
        return false;
      }
    }
    return true;
  }

  delay = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  stopSorting = () => {
    this.setState({sorting: false, method: 'No sorting method selected...'})
  }

  bubbleSort = async () => {
    this.setState({method: 'Bubble Sort',
  sorting: true})
    if (!this.barsAreSorted()) {
      let newBars = this.state.bars;
      let swapped;
      do {
        swapped = false;
        for (let i = 0; i < newBars.length - 1; i ++) {
          if (newBars[i] > newBars[i + 1] && this.state.sorting) {
            let temp = newBars[i];
            newBars[i] = newBars[i + 1];
            newBars[i + 1] = temp;
            this.setState({bars: newBars.slice(0)})
            await this.delay(this.state.delay * 1000);
            swapped = true;
          }
        }
      } while (swapped && this.state.sorting);

    }
  }

  selectionSort = async () => {
    this.setState({method: 'Selection Sort',
  sorting: true})
    let newBars = this.state.bars.slice();
    let currIndex = 0;
    while (!this.barsAreSorted() && this.state.sorting) {
      let smallestIndex = currIndex;
      for (let i = currIndex + 1; i < newBars.length; i++) {
        if (newBars[i] < newBars[smallestIndex]) {
            smallestIndex = i;
        }
    }
      let temp = newBars[currIndex];
      newBars[currIndex] = newBars[smallestIndex];
      newBars[smallestIndex] = temp;
      currIndex ++;
      this.setState({bars: newBars})
      await this.delay(this.state.delay *  1000);
    }
  }

  timSort = () => {
    this.setState({method: 'Tim Sort'})
  }


  insertionSort = async () => {
    this.setState({method: 'Insertion Sort',
  sorting: true})
    let newBars = this.state.bars.slice();
    while(!this.barsAreSorted() && this.state.sorting) {
      for (let i = 1; i < newBars.length; i ++) {
        if (newBars[i] < newBars[i - 1]) {
          let temp = newBars[i];
          newBars[i] = newBars[i - 1];
          newBars[i - 1] = temp;
          this.setState({bars: newBars})
          await this.delay(this.state.delay * 1000);
        }
      }
    }
  }

  

  render() {
    return (
      <>
      <h1>Sorting Algorithm Visualizer</h1>
      <div className='util-div'>
        <Slider handleDelay={this.updateDelay} handleBars={this.updateBars}></Slider>
        <ShuffleBars stop={this.stopSorting} shuffle={this.shuffleBars}></ShuffleBars>
        <Sort bubble={this.bubbleSort} selection={this.selectionSort} insertion={this.insertionSort} tim={this.timSort}></Sort>
      </div>
      <div className='box-div'>
        <SortBox className='sort-box 'bars={this.state.bars} method={1}></SortBox>
        <p>{this.state.method}</p>
      </div>
      </>
    );
  }
}

export default App;
