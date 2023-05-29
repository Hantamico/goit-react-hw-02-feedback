import React from "react";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Section from "./Section/Section"
import Notification from "./Notification/Notification";
import Statistics from "./Statistics/Statistics";

class App extends React.Component{
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedback = (event) => {
    const option = event.target.name;
    console.log(event.target.name);
    return this.setState(prevState => ({ [option]: prevState[option] + 1 }));
  };
    
  countTotalFeedback = () => {
        return this.state.good + this.state.neutral + this.state.bad;
     };

  
  countPositiveFeedbackPercentage = () => { 
    const total = this.countTotalFeedback()
    let totalPositive = 0;
    if (total > 0) {
      return totalPositive = ((this.state.good / total) * 100).toFixed(0);
    }
    return totalPositive;
  };
  
  render() {
    const options = Object.keys(this.state);
    const onHandleFeedback = this.handleFeedback;
    return (
      
      <div>
        <Section title={'Please leave feedback'}>
        <FeedbackOptions handleFeedback={onHandleFeedback} options={options} />
        </Section>

        <Section title="Statistics">
          {this.countTotalFeedback() > 0 ? (
          <Statistics
            good = {this.state.good}
            neutral = {this.state.neutral}
            bad = {this.state.bad}
            total = {this.countTotalFeedback()}
            percentage = {this.countPositiveFeedbackPercentage()}
          />
          ) : (
              <Notification message={"There is no feedback"}/>
          )}
          
        </Section>
      </div>
    );
    }
}

export default App;