import React, { Component } from 'react'



class StopWatch extends Component {
    constructor(props) {
        super(props)
        this.state = {
            onOff: false,
            cTime: 0,
            sTime: 0
        }
        this.ID = 0
    }

    componentWillMount() {
        this.ID = setInterval(e => {
            this.timer()
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.timer)
    }

    timer() {
        if (this.state.onOff) {
            const n = new Date().getTime()
            this.setState({cTime: n})
        }
    }

    Handler(e) {
        if (this.state.onOff) {
            this.setState({onOff: false})
            return
        }
        const n = new Date().getTime()
        this.setState({
            cTime: n,
            sTime: n,
            onOff: true
        })
    };

    getTime() {
        const s = this.state
        const del = s.cTime - s.sTime
        const t = Math.floor(del / 1000)
        const ss = t % 60
        const m = Math.floor(t / 60)
        const mm = m % 60
        const hh = Math.floor(mm / 60)
        const z = (num) => {
            const s = '00' + String(num)
            return s.substr(s.length - 2, 2)
        }
        return <h1 className='timers'>{z(hh)} : {z(mm)} : {z(ss)}</h1>
    }

    render() {
        let name = 'START'
        if (this.state.onOff) {
            name = 'STOP'
        }
        const timers = this.getTime()
        const click = (e) => this.Handler(e)
        return (<div className='StopWatch'>
            <div>{timers}</div>
            <button onClick={click}>{name}</button>
        </div>)
    }
}

export default StopWatch