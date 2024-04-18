import axios from 'axios';
import { getEnvVariables } from '../helpers/getEnvVariables';

const { GITHUB_TOKEN } = getEnvVariables();

export const githubApi = axios.create({
    baseURL: 'https://api.github.com/repos/facebook/react',
    headers: {
        Authorization: GITHUB_TOKEN
    }
});

