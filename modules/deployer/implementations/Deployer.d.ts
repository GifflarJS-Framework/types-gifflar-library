import { IAbiItem } from "@deployer/types/IAbiItem";
import { INetworkConfig } from "@deployer/types/INetworkConfig";
import { IWeb3 } from "@deployer/types/IWeb3";
import { Account } from "web3-core";
import { Contract } from "web3-eth-contract";
import { IDeployer } from "../types/IDeployer";
import { IDeployerInputs } from "../types/IDeployerInputs";
declare class Deployer implements IDeployer {
    private web3;
    private networkConfig;
    setWeb3(newWeb3: IWeb3): IWeb3;
    getWeb3(): IWeb3 | undefined | null;
    setNetworkConfig(networkConfig: INetworkConfig): void;
    createWeb3(): IWeb3;
    addSigner(accountPrivateKey: string): Account;
    deploy(inputs: IDeployerInputs, accountPrivateKey?: string): Promise<Contract>;
    retrieve(abi: IAbiItem, address: string): Promise<Contract>;
}
export default Deployer;
