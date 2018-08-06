import React, { Component } from 'react';
import TradingViewWidget, {Themes, IntervalTypes, BarStyles} from 'react-tradingview-widget';


class Graph extends Component {

  render() {
    return (
      <div class="stockGraph">
        <TradingViewWidget
          symbol= "COINBASE:BTCUSD"
          theme={Themes.DARK}
          style={BarStyles.AREA}
          interval={IntervalTypes.W}
          height = {500}
          width = {800 }
          allow_symbol_change = {false}
        />
      </div>
    )
  }
}
export default Graph;
