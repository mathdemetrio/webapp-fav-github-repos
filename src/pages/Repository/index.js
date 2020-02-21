import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';
import api from '../../services/api';

import Container from '../../components/Container';
import {
  Loading,
  Owner,
  IssuesList,
  StatusFilter,
  PageControl,
} from './styles';

export default class Repository extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        repository: PropTypes.string,
      }),
    }).isRequired,
  };

  state = {
    repository: {},
    issues: [],
    loading: true,
    filter: 'all',
    page: 1,
  };

  async componentDidMount() {
    const { match } = this.props;
    const { filter, page } = this.state;

    const repoName = decodeURIComponent(match.params.repository);

    const [repository, issues] = await Promise.all([
      api.get(`/repos/${repoName}`),
      api.get(`/repos/${repoName}/issues`, {
        params: {
          state: filter,
          per_page: 5,
          page,
        },
      }),
    ]);

    this.setState({
      repository: repository.data,
      issues: issues.data,
      loading: false,
    });
  }

  getIssues = async () => {
    const { match } = this.props;
    const { filter, page } = this.state;

    const repoName = decodeURIComponent(match.params.repository);

    const response = await api.get(`/repos/${repoName}/issues`, {
      params: {
        state: filter,
        per_page: 5,
        page,
      },
    });

    this.setState({
      issues: response.data,
    });
  };

  handleFilter = async filter => {
    await this.setState({
      filter,
      page: 1,
    });

    this.getIssues();
  };

  handlePage = async action => {
    const { page } = this.state;
    if (action === 'next') {
      await this.setState({ page: page + 1 });
    } else if (action === 'prev') {
      await this.setState({ page: page - 1 });
    }

    this.getIssues();
  };

  render() {
    const { repository, issues, loading, page, filter } = this.state;

    if (loading) {
      return <Loading>Carregando...</Loading>;
    }

    return (
      <Container>
        <Owner>
          <Link to="/">Voltar aos repositórios</Link>
          <img src={repository.owner.avatar_url} alt={repository.owner.name} />
          <h1>{repository.name}</h1>
          <p>{repository.description}</p>
        </Owner>

        <IssuesList>
          <StatusFilter>
            <button
              type="button"
              onClick={() => this.handleFilter('all')}
              disabled={filter === 'all'}
            >
              Todos
            </button>
            <button
              type="button"
              onClick={() => this.handleFilter('open')}
              disabled={filter === 'open'}
            >
              Abertos
            </button>
            <button
              type="button"
              onClick={() => this.handleFilter('closed')}
              disabled={filter === 'closed'}
            >
              Fechados
            </button>
          </StatusFilter>
          {issues.map(issue => (
            <li key={String(issue.id)}>
              <img src={issue.user.avatar_url} alt={issue.user.login} />
              <div>
                <strong>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={issue.html_url}
                  >
                    {issue.title}
                  </a>
                  {issue.labels.map(label => (
                    <span key={String(label.id)}>{label.name}</span>
                  ))}
                </strong>
                <p>{issue.user.login}</p>
              </div>
            </li>
          ))}
        </IssuesList>

        <PageControl>
          <button
            type="button"
            disabled={page < 2}
            onClick={() => this.handlePage('prev')}
          >
            <FaArrowAltCircleLeft size={20} />
          </button>
          <span>Página {page}</span>
          <button type="button" onClick={() => this.handlePage('next')}>
            <FaArrowAltCircleRight size={20} />
          </button>
        </PageControl>
      </Container>
    );
  }
}
