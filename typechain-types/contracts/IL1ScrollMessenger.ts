/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../common";

export declare namespace IL1ScrollMessenger {
  export type L2MessageProofStruct = {
    batchHash: PromiseOrValue<BytesLike>;
    merkleProof: PromiseOrValue<BytesLike>;
  };

  export type L2MessageProofStructOutput = [string, string] & {
    batchHash: string;
    merkleProof: string;
  };
}

export interface IL1ScrollMessengerInterface extends utils.Interface {
  functions: {
    "relayMessageWithProof(address,address,uint256,uint256,bytes,(bytes32,bytes))": FunctionFragment;
    "sendMessage(address,uint256,bytes,uint256,address)": FunctionFragment;
    "xDomainMessageSender()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "relayMessageWithProof"
      | "sendMessage"
      | "xDomainMessageSender"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "relayMessageWithProof",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>,
      IL1ScrollMessenger.L2MessageProofStruct
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "sendMessage",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "xDomainMessageSender",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "relayMessageWithProof",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "sendMessage",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "xDomainMessageSender",
    data: BytesLike
  ): Result;

  events: {};
}

export interface IL1ScrollMessenger extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IL1ScrollMessengerInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    relayMessageWithProof(
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      value: PromiseOrValue<BigNumberish>,
      nonce: PromiseOrValue<BigNumberish>,
      message: PromiseOrValue<BytesLike>,
      proof: IL1ScrollMessenger.L2MessageProofStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    sendMessage(
      target: PromiseOrValue<string>,
      value: PromiseOrValue<BigNumberish>,
      message: PromiseOrValue<BytesLike>,
      gasLimit: PromiseOrValue<BigNumberish>,
      refundAddress: PromiseOrValue<string>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    xDomainMessageSender(overrides?: CallOverrides): Promise<[string]>;
  };

  relayMessageWithProof(
    from: PromiseOrValue<string>,
    to: PromiseOrValue<string>,
    value: PromiseOrValue<BigNumberish>,
    nonce: PromiseOrValue<BigNumberish>,
    message: PromiseOrValue<BytesLike>,
    proof: IL1ScrollMessenger.L2MessageProofStruct,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  sendMessage(
    target: PromiseOrValue<string>,
    value: PromiseOrValue<BigNumberish>,
    message: PromiseOrValue<BytesLike>,
    gasLimit: PromiseOrValue<BigNumberish>,
    refundAddress: PromiseOrValue<string>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  xDomainMessageSender(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    relayMessageWithProof(
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      value: PromiseOrValue<BigNumberish>,
      nonce: PromiseOrValue<BigNumberish>,
      message: PromiseOrValue<BytesLike>,
      proof: IL1ScrollMessenger.L2MessageProofStruct,
      overrides?: CallOverrides
    ): Promise<void>;

    sendMessage(
      target: PromiseOrValue<string>,
      value: PromiseOrValue<BigNumberish>,
      message: PromiseOrValue<BytesLike>,
      gasLimit: PromiseOrValue<BigNumberish>,
      refundAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    xDomainMessageSender(overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    relayMessageWithProof(
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      value: PromiseOrValue<BigNumberish>,
      nonce: PromiseOrValue<BigNumberish>,
      message: PromiseOrValue<BytesLike>,
      proof: IL1ScrollMessenger.L2MessageProofStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    sendMessage(
      target: PromiseOrValue<string>,
      value: PromiseOrValue<BigNumberish>,
      message: PromiseOrValue<BytesLike>,
      gasLimit: PromiseOrValue<BigNumberish>,
      refundAddress: PromiseOrValue<string>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    xDomainMessageSender(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    relayMessageWithProof(
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      value: PromiseOrValue<BigNumberish>,
      nonce: PromiseOrValue<BigNumberish>,
      message: PromiseOrValue<BytesLike>,
      proof: IL1ScrollMessenger.L2MessageProofStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    sendMessage(
      target: PromiseOrValue<string>,
      value: PromiseOrValue<BigNumberish>,
      message: PromiseOrValue<BytesLike>,
      gasLimit: PromiseOrValue<BigNumberish>,
      refundAddress: PromiseOrValue<string>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    xDomainMessageSender(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
