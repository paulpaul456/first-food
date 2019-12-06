import React from 'react'
import { Loading } from 'react-simple-chatbot';
export class ChatBotFetch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      result: '',
      trigger: false,
    };
  }
  componentDidMount() {
    const { previousStep } = this.props;
    const value = previousStep.value;
    this.fetchData(value)
  }
  fetchData = async (val) => {
    const response = await fetch(
      `http://localhost:6003/api/collection/courses/${val}`,
      {
        method: 'GET',
        headers: new Headers({
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }),
      },
    )

    // if (!response.ok) throw new Error(response.statusText)
    const data = await response.json()
    console.log('data', data)
    // alert('dataCome')
    if (data.collection) {
      // console.log('dataYes')
      this.setState({ loading: false, result: data.collection });
      this.props.triggerNextStep({value:val,trigger:'Yes data'});
    } else {
      // console.log('dataNo')
      // this.setState({ loading: false, result: 'Not found.' });
      this.props.triggerNextStep({value:val,trigger:'NoData'});
    }
  }
  triggetNext() {
    this.setState({ trigger: true }, () => {
      this.props.triggerNextStep();
    });
  }
  render() {
    const { trigger, loading, result } = this.state;
    let {previousStep} = this.props
    // console.log(this.props)
    // console.log(this.state)
    return (
      <>
      {/*{ loading ? <Loading /> : <h1>{previousStep.value}</h1> }*/}
      </>
      )
  }

}