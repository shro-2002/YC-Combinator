import React from 'react';
import Dragula from 'dragula';
import 'dragula/dist/dragula.css';
import Swimlane from './Swimlane';
import './Board.css';

export default class Board extends React.Component {
  constructor(props) {
    super(props);
    const clients = this.getClients();
    this.state = {
      clients: {
        backlog: clients.filter(client => !client.status || client.status === 'backlog'),
        inProgress: clients.filter(client => client.status && client.status === 'in-progress'),
        complete: clients.filter(client => client.status && client.status === 'complete'),
      }
    }
    this.swimlanes = {
      backlog: React.createRef(),
      inProgress: React.createRef(),
      complete: React.createRef(),
    }
  }
  getClients() {
    return [
      ['1','Stark, White and Abbott','Cloned Optimal Architecture', 'in-progress'],
      ['2','Wiza LLC','Exclusive Bandwidth-Monitored Implementation', 'complete'],
      ['3','Nolan LLC','Vision-Oriented 4Thgeneration Graphicaluserinterface', 'backlog'],
      ['4','Thompson PLC','Streamlined Regional Knowledgeuser', 'in-progress'],
      ['5','Walker-Williamson','Team-Oriented 6Thgeneration Matrix', 'in-progress'],
      ['6','Boehm and Sons','Automated Systematic Paradigm', 'backlog'],
      ['7','Runolfsson, Hegmann and Block','Integrated Transitional Strategy', 'backlog'],
      ['8','Schumm-Labadie','Operative Heuristic Challenge', 'backlog'],
      ['9','Kohler Group','Re-Contextualized Multi-Tasking Attitude', 'backlog'],
      ['10','Romaguera Inc','Managed Foreground Toolset', 'backlog'],
      ['11','Reilly-King','Future-Proofed Interactive Toolset', 'complete'],
      ['12','Emard, Champlin and Runolfsdottir','Devolved Needs-Based Capability', 'backlog'],
      ['13','Fritsch, Cronin and Wolff','Open-Source 3Rdgeneration Website', 'complete'],
      ['14','Borer LLC','Profit-Focused Incremental Orchestration', 'backlog'],
      ['15','Emmerich-Ankunding','User-Centric Stable Extranet', 'in-progress'],
      ['16','Willms-Abbott','Progressive Bandwidth-Monitored Access', 'in-progress'],
      ['17','Brekke PLC','Intuitive User-Facing Customerloyalty', 'complete'],
      ['18','Bins, Toy and Klocko','Integrated Assymetric Software', 'backlog'],
      ['19','Hodkiewicz-Hayes','Programmable Systematic Securedline', 'backlog'],
      ['20','Murphy, Lang and Ferry','Organized Explicit Access', 'backlog'],
    ].map(companyDetails => ({
      id: companyDetails[0],
      name: companyDetails[1],
      description: companyDetails[2],
      status: companyDetails[3],
    }));
  }
  renderSwimlane(name, clients, ref, id) {
    return (
      <Swimlane name={name} clients={clients} id={id} ref={ref} />
    );
  }

  render() {
    return (
      <div className="Board">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-4">
              {this.renderSwimlane('Backlog', this.state.clients.backlog, this.swimlanes.backlog, 'backlog')}
            </div>
            <div className="col-md-4">
              {this.renderSwimlane('In Progress', this.state.clients.inProgress, this.swimlanes.inProgress, 'in-progress')}
            </div>
            <div className="col-md-4">
              {this.renderSwimlane('Complete', this.state.clients.complete, this.swimlanes.complete, 'complete')}
            </div>
          </div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    const backlogDOMNode = this.swimlanes.backlog.current.cardsRef.current;
    const inProgressDOMNode = this.swimlanes.inProgress.current.cardsRef.current;
    const completeDomNode = this.swimlanes.complete.current.cardsRef.current;

    const drake = Dragula([backlogDOMNode, inProgressDOMNode, completeDomNode])
      .on('drop', (el, target, source) => {
        const newRowNum = Array.from(target.children).findIndex(cardNode => cardNode.id === el.id);

        // cancel modifying the DOM externally
        drake.cancel(true);

        // update state data, which re-renders the view correctly
        this.updateCardIntoSwimlane(el.id, newRowNum, source.id, target.id);
    });
  }

  updateCardIntoSwimlane(cardId, rowNum, sourceId, targetId) {
    // update 'status' field in the card data (this prop determines color)
    let sourceSwimlane = this.getSwimlaneStateFromId(sourceId);
    let cardData = sourceSwimlane.find(card => card.id === cardId);
    cardData.status = targetId;

    // update state for source lane
    sourceSwimlane = sourceSwimlane.filter(card => card.id !== cardId);
    this.updateSwimlaneData(sourceId, sourceSwimlane);

    // update state for target lane
    let targetSwimlane = this.getSwimlaneStateFromId(targetId);
    targetSwimlane.splice(rowNum, 0, cardData);
    this.updateSwimlaneData(targetId, targetSwimlane);
  }

  getSwimlaneStateFromId(swimlaneId) {
    switch (swimlaneId) {
      case 'backlog':
        return this.state.clients.backlog;
      case 'in-progress':
        return this.state.clients.inProgress;
      case 'complete':
        return this.state.clients.complete;
      default:
        console.error('Unrecognized swimlane!');
    }
  }

  updateSwimlaneData(swimlaneId, swimlaneData) {
    switch (swimlaneId) {
      case 'backlog':
        this.setState({
          clients: {
            ...this.state.clients,
            backlog: swimlaneData,
          },
        });
        return;
      case 'in-progress':
        this.setState({
          clients: {
            ...this.state.clients,
            inProgress: swimlaneData,
          },
        });
        return;
      case 'complete':
        this.setState({
          clients: {
            ...this.state.clients,
            complete: swimlaneData,
          },
        });
        return;
      default:
        console.error('Unrecognized swimlane!');
    }
  }
}
