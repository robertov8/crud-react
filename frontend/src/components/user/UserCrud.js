import React, { Component } from 'react';
import axios from 'axios';
import Main from '../template/Main/Main';

const headerProps = {
    icon: 'users',
    title: 'Usuários',
    subtitle: 'Cadastro de usuários: Incluir, Listar, Alterar e Excluir'
};

const baseUrl = 'http://localhost:3001/users';
const initialState = {
    user: { name: '', email: '' },
    list: []
};

export default class UserCrud extends Component {
    constructor(props) {
        super(props);
        this.state = { ...initialState };

        this.updateField = this.updateField.bind(this);
        this.save = this.save.bind(this);
        this.clear = this.clear.bind(this);
        this.load = this.load.bind(this);
        this.remove = this.remove.bind(this);
    }

    componentWillMount() {
        axios(baseUrl).then(resp => {
            this.setState({ list: resp.data });
        });
    }

    clear() {
        this.setState({ user: initialState.user });
    }

    save() {
        const user = this.state.user;
        const method = user.id ? 'put' : 'post';
        const url = user.id ? `${baseUrl}/${user.id}` : baseUrl;
        axios[method](url, user)
            .then(resp => {
                const list = this.getUpdatedList(resp.data);
                this.setState({ user: initialState.user, list });
            });
    }

    getUpdatedList(user, add = true) {
        const list = this.state.list.filter(u => u.id !== user.id);
        if (add) list.unshift(user);
        return list;
    }

    updateField(event) {
        const user = { ...this.state.user };
        user[event.target.name] = event.target.value;
        this.setState({ user });
    }

    load(user) {
        this.setState({ user });
    }

    remove(user) {
        axios.delete(`${baseUrl}/${user.id}`).then(() => {
            const list = this.getUpdatedList(user, false);
            this.setState({ list });
        });
    }

    renderForm() {
        return (
            <div className='form'>
                <div className='row'>
                    <div className='col-12 col-md-6'>
                        <div className='form-group'>
                            <label>Nome</label>
                            <input
                                type='text'
                                className='form-control'
                                name='name'
                                value={this.state.user.name}
                                placeholder='Digite um nome'
                                onChange={this.updateField}/>
                        </div>
                    </div>

                    <div className='col-12 col-md-6'>
                        <div className='form-group'>
                            <label>E-mail</label>
                            <input
                                type='email'
                                className='form-control'
                                name='email'
                                value={this.state.user.email}
                                placeholder='Digite um e-mail'
                                onChange={this.updateField} />
                        </div>
                    </div>
                </div>

                <hr />

                <div className='row'>
                    <div className='col-12 d-flex justify-content-end'>
                        <button className='btn btn-primary' onClick={this.save}>Salvar</button>
                        <button className='btn btn-secondary ml-2' onClick={this.clear}>Cancelar</button>
                    </div>
                </div>

            </div>
        );
    }

    renderTable() {
        return (
            <table className='table mt-4'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>E-mail</th>
                        <th>Ações</th>
                    </tr>
                </thead>

                <tbody>
                    {this.renderRows()}
                </tbody>
            </table>
        );
    }

    renderRows() {
        return this.state.list.map(user => {
            return (
                <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>
                        <button className='btn btn-warning' onClick={() => this.load(user)}>
                            <i className='fa fa-pencil' />
                        </button>

                        <button className='btn btn-danger ml-2' onClick={() => this.remove(user)}>
                            <i className='fa fa-trash' />
                        </button>
                    </td>
                </tr>
            );
        });
    }

    render() {
        return (
            <Main {...headerProps} >
                Cadastro de Usuário

                {this.renderForm()}

                {this.renderTable()}
            </Main>
        );
    }
}