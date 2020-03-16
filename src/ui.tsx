import * as React from 'react'
import * as ReactDOM from 'react-dom'
import Button from './components/button'
import StyleRow from './components/stylerow'
import {Illustration} from './components/icons'
import './ui.scss'

interface AppProps {
  //code related to your props goes here
}

interface AppState {
  data: any,
  refreshLoading: any
  selectedStyle: any
  initial: any
}

class App extends React.Component<AppProps, AppState> {

  constructor(props) {
    super(props);
    this.state = {
      data: [],
      refreshLoading: false,
      selectedStyle: "",
      initial: true,
    }
}

  textbox: HTMLInputElement

  countRef = (element: HTMLInputElement) => {
    if (element) element.value = '5'
    this.textbox = element
  }

  componentDidMount = () => {
    window.onmessage = (event) => {
      switch (event.data.pluginMessage.type){
        case "count":
          this.setState({
            data: event.data.pluginMessage.value,
            refreshLoading: false,
            initial: false
          })
          console.log(event.data.pluginMessage.value);
          break;
        case "select style":
          this.setState({
            selectedStyle: event.data.pluginMessage.id
          })
          break;
        case "update":
          this.setState({
            data: event.data.pluginMessage.value,
            refreshLoading: false
          })
      }
    }
  }

  onScan = () => {
    this.setState({
      refreshLoading: true
    })
    parent.postMessage({ pluginMessage: { type: 'scan'} }, '*')
  }

  onCancel = () => {
    parent.postMessage({ pluginMessage: { type: 'cancel' } }, '*')
  } 

  render() {
    let tableRows = this.state.data.map((row, index)=><StyleRow data={row} selectedStyle={this.state.selectedStyle} rowIndex={index} key={index}/>)
    return<div>
      {this.state.initial?
        <div>
          <div className="initial-illustration-wrapper">
            <Illustration/>
          </div>
          <div className="initial-button-wrapper">
            <Button
              type = "button-primary"
              text = "Scan This Page"
              onClick = {this.onScan} 
              loadingState = {this.state.refreshLoading}     
            />
          </div>
          <div className="initial-message">This may take a while if the file is large</div>
          <div className="initial-version">Version alpha 1.0.0</div>
        </div>
        :
        <div>
          <div className="top-bar">
            <div className="table-title">
              <div className="table-title-item">
                Appearance
              </div>
              <div className="table-title-item">
                Style Name
              </div>
              <div className="table-title-item">
                Usage
              </div>
              <div className="table-title-item">
                Action
              </div>
            </div>
          </div>
          <div className = "table-container">
            {tableRows}
            {tableRows.length === 0?<div className="empty-table">No styles detected</div>:null}
          </div>
          <div className="bottom-bar">
            <div className="button-wrapper">
              <Button
                  type = "button-secondary"
                  text = "Refresh"
                  onClick = {this.onScan} 
                  loadingState = {this.state.refreshLoading}     
              />
            </div>
          </div>
        </div>
      }</div>
  }
}

ReactDOM.render(<App />, document.getElementById('react-page'))