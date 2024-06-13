import { ScannerStrategy } from '../types';
import { Services } from '../services';
import { OpenAIModels } from '../models';
import { showAsyncSpinner } from '../spinner';
import spinners from 'cli-spinners';
import chalk from 'chalk';

class AzureScanner implements ScannerStrategy {
  async scan(codeSnippets: string[], modelName: keyof typeof OpenAIModels) {
    // Pseudocode:
    // 1. Map over the codeSnippets and call Services.azure.getStatementsFromCode for each snippet
    // 2. Show a spinner while scanning for Azure SDK calls
    // 3. Flatten the statements from all code snippets
    // 4. Call Services.azure.getPoliciesFromStatements with the flattened statements
    // 5. Show a spinner while generating policies
    // 6. Return the generated policies
  }
}

export default AzureScanner;
