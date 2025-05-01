
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Video
 * 
 */
export type Video = $Result.DefaultSelection<Prisma.$VideoPayload>
/**
 * Model Instruction
 * 
 */
export type Instruction = $Result.DefaultSelection<Prisma.$InstructionPayload>
/**
 * Model RenderJob
 * 
 */
export type RenderJob = $Result.DefaultSelection<Prisma.$RenderJobPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const InstructionType: {
  SUBTITLE: 'SUBTITLE',
  AUDIO_MODIFY: 'AUDIO_MODIFY',
  OVERLAY_TEXT: 'OVERLAY_TEXT',
  OVERLAY_IMAGE: 'OVERLAY_IMAGE'
};

export type InstructionType = (typeof InstructionType)[keyof typeof InstructionType]


export const JobStatus: {
  QUEUED: 'QUEUED',
  RUNNING: 'RUNNING',
  COMPLETED: 'COMPLETED',
  FAILED: 'FAILED'
};

export type JobStatus = (typeof JobStatus)[keyof typeof JobStatus]


export const Status: {
  uploaded: 'uploaded',
  pending: 'pending'
};

export type Status = (typeof Status)[keyof typeof Status]

}

export type InstructionType = $Enums.InstructionType

export const InstructionType: typeof $Enums.InstructionType

export type JobStatus = $Enums.JobStatus

export const JobStatus: typeof $Enums.JobStatus

export type Status = $Enums.Status

export const Status: typeof $Enums.Status

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Videos
 * const videos = await prisma.video.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Videos
   * const videos = await prisma.video.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.video`: Exposes CRUD operations for the **Video** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Videos
    * const videos = await prisma.video.findMany()
    * ```
    */
  get video(): Prisma.VideoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.instruction`: Exposes CRUD operations for the **Instruction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Instructions
    * const instructions = await prisma.instruction.findMany()
    * ```
    */
  get instruction(): Prisma.InstructionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.renderJob`: Exposes CRUD operations for the **RenderJob** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RenderJobs
    * const renderJobs = await prisma.renderJob.findMany()
    * ```
    */
  get renderJob(): Prisma.RenderJobDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Video: 'Video',
    Instruction: 'Instruction',
    RenderJob: 'RenderJob'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "video" | "instruction" | "renderJob"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Video: {
        payload: Prisma.$VideoPayload<ExtArgs>
        fields: Prisma.VideoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VideoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VideoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>
          }
          findFirst: {
            args: Prisma.VideoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VideoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>
          }
          findMany: {
            args: Prisma.VideoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>[]
          }
          create: {
            args: Prisma.VideoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>
          }
          createMany: {
            args: Prisma.VideoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VideoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>[]
          }
          delete: {
            args: Prisma.VideoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>
          }
          update: {
            args: Prisma.VideoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>
          }
          deleteMany: {
            args: Prisma.VideoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VideoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VideoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>[]
          }
          upsert: {
            args: Prisma.VideoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>
          }
          aggregate: {
            args: Prisma.VideoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVideo>
          }
          groupBy: {
            args: Prisma.VideoGroupByArgs<ExtArgs>
            result: $Utils.Optional<VideoGroupByOutputType>[]
          }
          count: {
            args: Prisma.VideoCountArgs<ExtArgs>
            result: $Utils.Optional<VideoCountAggregateOutputType> | number
          }
        }
      }
      Instruction: {
        payload: Prisma.$InstructionPayload<ExtArgs>
        fields: Prisma.InstructionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InstructionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstructionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InstructionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstructionPayload>
          }
          findFirst: {
            args: Prisma.InstructionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstructionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InstructionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstructionPayload>
          }
          findMany: {
            args: Prisma.InstructionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstructionPayload>[]
          }
          create: {
            args: Prisma.InstructionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstructionPayload>
          }
          createMany: {
            args: Prisma.InstructionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InstructionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstructionPayload>[]
          }
          delete: {
            args: Prisma.InstructionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstructionPayload>
          }
          update: {
            args: Prisma.InstructionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstructionPayload>
          }
          deleteMany: {
            args: Prisma.InstructionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InstructionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InstructionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstructionPayload>[]
          }
          upsert: {
            args: Prisma.InstructionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstructionPayload>
          }
          aggregate: {
            args: Prisma.InstructionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInstruction>
          }
          groupBy: {
            args: Prisma.InstructionGroupByArgs<ExtArgs>
            result: $Utils.Optional<InstructionGroupByOutputType>[]
          }
          count: {
            args: Prisma.InstructionCountArgs<ExtArgs>
            result: $Utils.Optional<InstructionCountAggregateOutputType> | number
          }
        }
      }
      RenderJob: {
        payload: Prisma.$RenderJobPayload<ExtArgs>
        fields: Prisma.RenderJobFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RenderJobFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RenderJobPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RenderJobFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RenderJobPayload>
          }
          findFirst: {
            args: Prisma.RenderJobFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RenderJobPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RenderJobFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RenderJobPayload>
          }
          findMany: {
            args: Prisma.RenderJobFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RenderJobPayload>[]
          }
          create: {
            args: Prisma.RenderJobCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RenderJobPayload>
          }
          createMany: {
            args: Prisma.RenderJobCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RenderJobCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RenderJobPayload>[]
          }
          delete: {
            args: Prisma.RenderJobDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RenderJobPayload>
          }
          update: {
            args: Prisma.RenderJobUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RenderJobPayload>
          }
          deleteMany: {
            args: Prisma.RenderJobDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RenderJobUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RenderJobUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RenderJobPayload>[]
          }
          upsert: {
            args: Prisma.RenderJobUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RenderJobPayload>
          }
          aggregate: {
            args: Prisma.RenderJobAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRenderJob>
          }
          groupBy: {
            args: Prisma.RenderJobGroupByArgs<ExtArgs>
            result: $Utils.Optional<RenderJobGroupByOutputType>[]
          }
          count: {
            args: Prisma.RenderJobCountArgs<ExtArgs>
            result: $Utils.Optional<RenderJobCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    video?: VideoOmit
    instruction?: InstructionOmit
    renderJob?: RenderJobOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type VideoCountOutputType
   */

  export type VideoCountOutputType = {
    instructions: number
    renderJobs: number
    copies: number
  }

  export type VideoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    instructions?: boolean | VideoCountOutputTypeCountInstructionsArgs
    renderJobs?: boolean | VideoCountOutputTypeCountRenderJobsArgs
    copies?: boolean | VideoCountOutputTypeCountCopiesArgs
  }

  // Custom InputTypes
  /**
   * VideoCountOutputType without action
   */
  export type VideoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoCountOutputType
     */
    select?: VideoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VideoCountOutputType without action
   */
  export type VideoCountOutputTypeCountInstructionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InstructionWhereInput
  }

  /**
   * VideoCountOutputType without action
   */
  export type VideoCountOutputTypeCountRenderJobsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RenderJobWhereInput
  }

  /**
   * VideoCountOutputType without action
   */
  export type VideoCountOutputTypeCountCopiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VideoWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Video
   */

  export type AggregateVideo = {
    _count: VideoCountAggregateOutputType | null
    _avg: VideoAvgAggregateOutputType | null
    _sum: VideoSumAggregateOutputType | null
    _min: VideoMinAggregateOutputType | null
    _max: VideoMaxAggregateOutputType | null
  }

  export type VideoAvgAggregateOutputType = {
    size: number | null
    duration: number | null
  }

  export type VideoSumAggregateOutputType = {
    size: number | null
    duration: number | null
  }

  export type VideoMinAggregateOutputType = {
    id: string | null
    filename: string | null
    path: string | null
    size: number | null
    duration: number | null
    status: $Enums.Status | null
    createdAt: Date | null
    updatedAt: Date | null
    orignalId: string | null
  }

  export type VideoMaxAggregateOutputType = {
    id: string | null
    filename: string | null
    path: string | null
    size: number | null
    duration: number | null
    status: $Enums.Status | null
    createdAt: Date | null
    updatedAt: Date | null
    orignalId: string | null
  }

  export type VideoCountAggregateOutputType = {
    id: number
    filename: number
    path: number
    size: number
    duration: number
    status: number
    createdAt: number
    updatedAt: number
    orignalId: number
    _all: number
  }


  export type VideoAvgAggregateInputType = {
    size?: true
    duration?: true
  }

  export type VideoSumAggregateInputType = {
    size?: true
    duration?: true
  }

  export type VideoMinAggregateInputType = {
    id?: true
    filename?: true
    path?: true
    size?: true
    duration?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    orignalId?: true
  }

  export type VideoMaxAggregateInputType = {
    id?: true
    filename?: true
    path?: true
    size?: true
    duration?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    orignalId?: true
  }

  export type VideoCountAggregateInputType = {
    id?: true
    filename?: true
    path?: true
    size?: true
    duration?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    orignalId?: true
    _all?: true
  }

  export type VideoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Video to aggregate.
     */
    where?: VideoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Videos to fetch.
     */
    orderBy?: VideoOrderByWithRelationInput | VideoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VideoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Videos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Videos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Videos
    **/
    _count?: true | VideoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VideoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VideoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VideoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VideoMaxAggregateInputType
  }

  export type GetVideoAggregateType<T extends VideoAggregateArgs> = {
        [P in keyof T & keyof AggregateVideo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVideo[P]>
      : GetScalarType<T[P], AggregateVideo[P]>
  }




  export type VideoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VideoWhereInput
    orderBy?: VideoOrderByWithAggregationInput | VideoOrderByWithAggregationInput[]
    by: VideoScalarFieldEnum[] | VideoScalarFieldEnum
    having?: VideoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VideoCountAggregateInputType | true
    _avg?: VideoAvgAggregateInputType
    _sum?: VideoSumAggregateInputType
    _min?: VideoMinAggregateInputType
    _max?: VideoMaxAggregateInputType
  }

  export type VideoGroupByOutputType = {
    id: string
    filename: string
    path: string
    size: number
    duration: number | null
    status: $Enums.Status
    createdAt: Date
    updatedAt: Date
    orignalId: string | null
    _count: VideoCountAggregateOutputType | null
    _avg: VideoAvgAggregateOutputType | null
    _sum: VideoSumAggregateOutputType | null
    _min: VideoMinAggregateOutputType | null
    _max: VideoMaxAggregateOutputType | null
  }

  type GetVideoGroupByPayload<T extends VideoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VideoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VideoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VideoGroupByOutputType[P]>
            : GetScalarType<T[P], VideoGroupByOutputType[P]>
        }
      >
    >


  export type VideoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    filename?: boolean
    path?: boolean
    size?: boolean
    duration?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    orignalId?: boolean
    instructions?: boolean | Video$instructionsArgs<ExtArgs>
    renderJobs?: boolean | Video$renderJobsArgs<ExtArgs>
    orignal?: boolean | Video$orignalArgs<ExtArgs>
    copies?: boolean | Video$copiesArgs<ExtArgs>
    _count?: boolean | VideoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["video"]>

  export type VideoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    filename?: boolean
    path?: boolean
    size?: boolean
    duration?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    orignalId?: boolean
    orignal?: boolean | Video$orignalArgs<ExtArgs>
  }, ExtArgs["result"]["video"]>

  export type VideoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    filename?: boolean
    path?: boolean
    size?: boolean
    duration?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    orignalId?: boolean
    orignal?: boolean | Video$orignalArgs<ExtArgs>
  }, ExtArgs["result"]["video"]>

  export type VideoSelectScalar = {
    id?: boolean
    filename?: boolean
    path?: boolean
    size?: boolean
    duration?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    orignalId?: boolean
  }

  export type VideoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "filename" | "path" | "size" | "duration" | "status" | "createdAt" | "updatedAt" | "orignalId", ExtArgs["result"]["video"]>
  export type VideoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    instructions?: boolean | Video$instructionsArgs<ExtArgs>
    renderJobs?: boolean | Video$renderJobsArgs<ExtArgs>
    orignal?: boolean | Video$orignalArgs<ExtArgs>
    copies?: boolean | Video$copiesArgs<ExtArgs>
    _count?: boolean | VideoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type VideoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orignal?: boolean | Video$orignalArgs<ExtArgs>
  }
  export type VideoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orignal?: boolean | Video$orignalArgs<ExtArgs>
  }

  export type $VideoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Video"
    objects: {
      instructions: Prisma.$InstructionPayload<ExtArgs>[]
      renderJobs: Prisma.$RenderJobPayload<ExtArgs>[]
      orignal: Prisma.$VideoPayload<ExtArgs> | null
      copies: Prisma.$VideoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      filename: string
      path: string
      size: number
      duration: number | null
      status: $Enums.Status
      createdAt: Date
      updatedAt: Date
      orignalId: string | null
    }, ExtArgs["result"]["video"]>
    composites: {}
  }

  type VideoGetPayload<S extends boolean | null | undefined | VideoDefaultArgs> = $Result.GetResult<Prisma.$VideoPayload, S>

  type VideoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VideoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VideoCountAggregateInputType | true
    }

  export interface VideoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Video'], meta: { name: 'Video' } }
    /**
     * Find zero or one Video that matches the filter.
     * @param {VideoFindUniqueArgs} args - Arguments to find a Video
     * @example
     * // Get one Video
     * const video = await prisma.video.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VideoFindUniqueArgs>(args: SelectSubset<T, VideoFindUniqueArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Video that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VideoFindUniqueOrThrowArgs} args - Arguments to find a Video
     * @example
     * // Get one Video
     * const video = await prisma.video.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VideoFindUniqueOrThrowArgs>(args: SelectSubset<T, VideoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Video that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoFindFirstArgs} args - Arguments to find a Video
     * @example
     * // Get one Video
     * const video = await prisma.video.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VideoFindFirstArgs>(args?: SelectSubset<T, VideoFindFirstArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Video that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoFindFirstOrThrowArgs} args - Arguments to find a Video
     * @example
     * // Get one Video
     * const video = await prisma.video.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VideoFindFirstOrThrowArgs>(args?: SelectSubset<T, VideoFindFirstOrThrowArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Videos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Videos
     * const videos = await prisma.video.findMany()
     * 
     * // Get first 10 Videos
     * const videos = await prisma.video.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const videoWithIdOnly = await prisma.video.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VideoFindManyArgs>(args?: SelectSubset<T, VideoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Video.
     * @param {VideoCreateArgs} args - Arguments to create a Video.
     * @example
     * // Create one Video
     * const Video = await prisma.video.create({
     *   data: {
     *     // ... data to create a Video
     *   }
     * })
     * 
     */
    create<T extends VideoCreateArgs>(args: SelectSubset<T, VideoCreateArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Videos.
     * @param {VideoCreateManyArgs} args - Arguments to create many Videos.
     * @example
     * // Create many Videos
     * const video = await prisma.video.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VideoCreateManyArgs>(args?: SelectSubset<T, VideoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Videos and returns the data saved in the database.
     * @param {VideoCreateManyAndReturnArgs} args - Arguments to create many Videos.
     * @example
     * // Create many Videos
     * const video = await prisma.video.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Videos and only return the `id`
     * const videoWithIdOnly = await prisma.video.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VideoCreateManyAndReturnArgs>(args?: SelectSubset<T, VideoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Video.
     * @param {VideoDeleteArgs} args - Arguments to delete one Video.
     * @example
     * // Delete one Video
     * const Video = await prisma.video.delete({
     *   where: {
     *     // ... filter to delete one Video
     *   }
     * })
     * 
     */
    delete<T extends VideoDeleteArgs>(args: SelectSubset<T, VideoDeleteArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Video.
     * @param {VideoUpdateArgs} args - Arguments to update one Video.
     * @example
     * // Update one Video
     * const video = await prisma.video.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VideoUpdateArgs>(args: SelectSubset<T, VideoUpdateArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Videos.
     * @param {VideoDeleteManyArgs} args - Arguments to filter Videos to delete.
     * @example
     * // Delete a few Videos
     * const { count } = await prisma.video.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VideoDeleteManyArgs>(args?: SelectSubset<T, VideoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Videos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Videos
     * const video = await prisma.video.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VideoUpdateManyArgs>(args: SelectSubset<T, VideoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Videos and returns the data updated in the database.
     * @param {VideoUpdateManyAndReturnArgs} args - Arguments to update many Videos.
     * @example
     * // Update many Videos
     * const video = await prisma.video.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Videos and only return the `id`
     * const videoWithIdOnly = await prisma.video.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VideoUpdateManyAndReturnArgs>(args: SelectSubset<T, VideoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Video.
     * @param {VideoUpsertArgs} args - Arguments to update or create a Video.
     * @example
     * // Update or create a Video
     * const video = await prisma.video.upsert({
     *   create: {
     *     // ... data to create a Video
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Video we want to update
     *   }
     * })
     */
    upsert<T extends VideoUpsertArgs>(args: SelectSubset<T, VideoUpsertArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Videos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoCountArgs} args - Arguments to filter Videos to count.
     * @example
     * // Count the number of Videos
     * const count = await prisma.video.count({
     *   where: {
     *     // ... the filter for the Videos we want to count
     *   }
     * })
    **/
    count<T extends VideoCountArgs>(
      args?: Subset<T, VideoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VideoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Video.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VideoAggregateArgs>(args: Subset<T, VideoAggregateArgs>): Prisma.PrismaPromise<GetVideoAggregateType<T>>

    /**
     * Group by Video.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VideoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VideoGroupByArgs['orderBy'] }
        : { orderBy?: VideoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VideoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVideoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Video model
   */
  readonly fields: VideoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Video.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VideoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    instructions<T extends Video$instructionsArgs<ExtArgs> = {}>(args?: Subset<T, Video$instructionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InstructionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    renderJobs<T extends Video$renderJobsArgs<ExtArgs> = {}>(args?: Subset<T, Video$renderJobsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RenderJobPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    orignal<T extends Video$orignalArgs<ExtArgs> = {}>(args?: Subset<T, Video$orignalArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    copies<T extends Video$copiesArgs<ExtArgs> = {}>(args?: Subset<T, Video$copiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Video model
   */
  interface VideoFieldRefs {
    readonly id: FieldRef<"Video", 'String'>
    readonly filename: FieldRef<"Video", 'String'>
    readonly path: FieldRef<"Video", 'String'>
    readonly size: FieldRef<"Video", 'Int'>
    readonly duration: FieldRef<"Video", 'Float'>
    readonly status: FieldRef<"Video", 'Status'>
    readonly createdAt: FieldRef<"Video", 'DateTime'>
    readonly updatedAt: FieldRef<"Video", 'DateTime'>
    readonly orignalId: FieldRef<"Video", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Video findUnique
   */
  export type VideoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    /**
     * Filter, which Video to fetch.
     */
    where: VideoWhereUniqueInput
  }

  /**
   * Video findUniqueOrThrow
   */
  export type VideoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    /**
     * Filter, which Video to fetch.
     */
    where: VideoWhereUniqueInput
  }

  /**
   * Video findFirst
   */
  export type VideoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    /**
     * Filter, which Video to fetch.
     */
    where?: VideoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Videos to fetch.
     */
    orderBy?: VideoOrderByWithRelationInput | VideoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Videos.
     */
    cursor?: VideoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Videos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Videos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Videos.
     */
    distinct?: VideoScalarFieldEnum | VideoScalarFieldEnum[]
  }

  /**
   * Video findFirstOrThrow
   */
  export type VideoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    /**
     * Filter, which Video to fetch.
     */
    where?: VideoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Videos to fetch.
     */
    orderBy?: VideoOrderByWithRelationInput | VideoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Videos.
     */
    cursor?: VideoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Videos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Videos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Videos.
     */
    distinct?: VideoScalarFieldEnum | VideoScalarFieldEnum[]
  }

  /**
   * Video findMany
   */
  export type VideoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    /**
     * Filter, which Videos to fetch.
     */
    where?: VideoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Videos to fetch.
     */
    orderBy?: VideoOrderByWithRelationInput | VideoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Videos.
     */
    cursor?: VideoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Videos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Videos.
     */
    skip?: number
    distinct?: VideoScalarFieldEnum | VideoScalarFieldEnum[]
  }

  /**
   * Video create
   */
  export type VideoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    /**
     * The data needed to create a Video.
     */
    data: XOR<VideoCreateInput, VideoUncheckedCreateInput>
  }

  /**
   * Video createMany
   */
  export type VideoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Videos.
     */
    data: VideoCreateManyInput | VideoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Video createManyAndReturn
   */
  export type VideoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * The data used to create many Videos.
     */
    data: VideoCreateManyInput | VideoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Video update
   */
  export type VideoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    /**
     * The data needed to update a Video.
     */
    data: XOR<VideoUpdateInput, VideoUncheckedUpdateInput>
    /**
     * Choose, which Video to update.
     */
    where: VideoWhereUniqueInput
  }

  /**
   * Video updateMany
   */
  export type VideoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Videos.
     */
    data: XOR<VideoUpdateManyMutationInput, VideoUncheckedUpdateManyInput>
    /**
     * Filter which Videos to update
     */
    where?: VideoWhereInput
    /**
     * Limit how many Videos to update.
     */
    limit?: number
  }

  /**
   * Video updateManyAndReturn
   */
  export type VideoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * The data used to update Videos.
     */
    data: XOR<VideoUpdateManyMutationInput, VideoUncheckedUpdateManyInput>
    /**
     * Filter which Videos to update
     */
    where?: VideoWhereInput
    /**
     * Limit how many Videos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Video upsert
   */
  export type VideoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    /**
     * The filter to search for the Video to update in case it exists.
     */
    where: VideoWhereUniqueInput
    /**
     * In case the Video found by the `where` argument doesn't exist, create a new Video with this data.
     */
    create: XOR<VideoCreateInput, VideoUncheckedCreateInput>
    /**
     * In case the Video was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VideoUpdateInput, VideoUncheckedUpdateInput>
  }

  /**
   * Video delete
   */
  export type VideoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    /**
     * Filter which Video to delete.
     */
    where: VideoWhereUniqueInput
  }

  /**
   * Video deleteMany
   */
  export type VideoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Videos to delete
     */
    where?: VideoWhereInput
    /**
     * Limit how many Videos to delete.
     */
    limit?: number
  }

  /**
   * Video.instructions
   */
  export type Video$instructionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instruction
     */
    select?: InstructionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instruction
     */
    omit?: InstructionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstructionInclude<ExtArgs> | null
    where?: InstructionWhereInput
    orderBy?: InstructionOrderByWithRelationInput | InstructionOrderByWithRelationInput[]
    cursor?: InstructionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InstructionScalarFieldEnum | InstructionScalarFieldEnum[]
  }

  /**
   * Video.renderJobs
   */
  export type Video$renderJobsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RenderJob
     */
    select?: RenderJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RenderJob
     */
    omit?: RenderJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RenderJobInclude<ExtArgs> | null
    where?: RenderJobWhereInput
    orderBy?: RenderJobOrderByWithRelationInput | RenderJobOrderByWithRelationInput[]
    cursor?: RenderJobWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RenderJobScalarFieldEnum | RenderJobScalarFieldEnum[]
  }

  /**
   * Video.orignal
   */
  export type Video$orignalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    where?: VideoWhereInput
  }

  /**
   * Video.copies
   */
  export type Video$copiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    where?: VideoWhereInput
    orderBy?: VideoOrderByWithRelationInput | VideoOrderByWithRelationInput[]
    cursor?: VideoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VideoScalarFieldEnum | VideoScalarFieldEnum[]
  }

  /**
   * Video without action
   */
  export type VideoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
  }


  /**
   * Model Instruction
   */

  export type AggregateInstruction = {
    _count: InstructionCountAggregateOutputType | null
    _avg: InstructionAvgAggregateOutputType | null
    _sum: InstructionSumAggregateOutputType | null
    _min: InstructionMinAggregateOutputType | null
    _max: InstructionMaxAggregateOutputType | null
  }

  export type InstructionAvgAggregateOutputType = {
    sequence: number | null
  }

  export type InstructionSumAggregateOutputType = {
    sequence: number | null
  }

  export type InstructionMinAggregateOutputType = {
    id: string | null
    videoId: string | null
    type: $Enums.InstructionType | null
    sequence: number | null
    createdAt: Date | null
  }

  export type InstructionMaxAggregateOutputType = {
    id: string | null
    videoId: string | null
    type: $Enums.InstructionType | null
    sequence: number | null
    createdAt: Date | null
  }

  export type InstructionCountAggregateOutputType = {
    id: number
    videoId: number
    type: number
    params: number
    sequence: number
    createdAt: number
    _all: number
  }


  export type InstructionAvgAggregateInputType = {
    sequence?: true
  }

  export type InstructionSumAggregateInputType = {
    sequence?: true
  }

  export type InstructionMinAggregateInputType = {
    id?: true
    videoId?: true
    type?: true
    sequence?: true
    createdAt?: true
  }

  export type InstructionMaxAggregateInputType = {
    id?: true
    videoId?: true
    type?: true
    sequence?: true
    createdAt?: true
  }

  export type InstructionCountAggregateInputType = {
    id?: true
    videoId?: true
    type?: true
    params?: true
    sequence?: true
    createdAt?: true
    _all?: true
  }

  export type InstructionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Instruction to aggregate.
     */
    where?: InstructionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Instructions to fetch.
     */
    orderBy?: InstructionOrderByWithRelationInput | InstructionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InstructionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Instructions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Instructions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Instructions
    **/
    _count?: true | InstructionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InstructionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InstructionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InstructionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InstructionMaxAggregateInputType
  }

  export type GetInstructionAggregateType<T extends InstructionAggregateArgs> = {
        [P in keyof T & keyof AggregateInstruction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInstruction[P]>
      : GetScalarType<T[P], AggregateInstruction[P]>
  }




  export type InstructionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InstructionWhereInput
    orderBy?: InstructionOrderByWithAggregationInput | InstructionOrderByWithAggregationInput[]
    by: InstructionScalarFieldEnum[] | InstructionScalarFieldEnum
    having?: InstructionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InstructionCountAggregateInputType | true
    _avg?: InstructionAvgAggregateInputType
    _sum?: InstructionSumAggregateInputType
    _min?: InstructionMinAggregateInputType
    _max?: InstructionMaxAggregateInputType
  }

  export type InstructionGroupByOutputType = {
    id: string
    videoId: string
    type: $Enums.InstructionType
    params: JsonValue
    sequence: number
    createdAt: Date
    _count: InstructionCountAggregateOutputType | null
    _avg: InstructionAvgAggregateOutputType | null
    _sum: InstructionSumAggregateOutputType | null
    _min: InstructionMinAggregateOutputType | null
    _max: InstructionMaxAggregateOutputType | null
  }

  type GetInstructionGroupByPayload<T extends InstructionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InstructionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InstructionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InstructionGroupByOutputType[P]>
            : GetScalarType<T[P], InstructionGroupByOutputType[P]>
        }
      >
    >


  export type InstructionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    videoId?: boolean
    type?: boolean
    params?: boolean
    sequence?: boolean
    createdAt?: boolean
    video?: boolean | VideoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["instruction"]>

  export type InstructionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    videoId?: boolean
    type?: boolean
    params?: boolean
    sequence?: boolean
    createdAt?: boolean
    video?: boolean | VideoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["instruction"]>

  export type InstructionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    videoId?: boolean
    type?: boolean
    params?: boolean
    sequence?: boolean
    createdAt?: boolean
    video?: boolean | VideoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["instruction"]>

  export type InstructionSelectScalar = {
    id?: boolean
    videoId?: boolean
    type?: boolean
    params?: boolean
    sequence?: boolean
    createdAt?: boolean
  }

  export type InstructionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "videoId" | "type" | "params" | "sequence" | "createdAt", ExtArgs["result"]["instruction"]>
  export type InstructionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    video?: boolean | VideoDefaultArgs<ExtArgs>
  }
  export type InstructionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    video?: boolean | VideoDefaultArgs<ExtArgs>
  }
  export type InstructionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    video?: boolean | VideoDefaultArgs<ExtArgs>
  }

  export type $InstructionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Instruction"
    objects: {
      video: Prisma.$VideoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      videoId: string
      type: $Enums.InstructionType
      params: Prisma.JsonValue
      sequence: number
      createdAt: Date
    }, ExtArgs["result"]["instruction"]>
    composites: {}
  }

  type InstructionGetPayload<S extends boolean | null | undefined | InstructionDefaultArgs> = $Result.GetResult<Prisma.$InstructionPayload, S>

  type InstructionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InstructionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InstructionCountAggregateInputType | true
    }

  export interface InstructionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Instruction'], meta: { name: 'Instruction' } }
    /**
     * Find zero or one Instruction that matches the filter.
     * @param {InstructionFindUniqueArgs} args - Arguments to find a Instruction
     * @example
     * // Get one Instruction
     * const instruction = await prisma.instruction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InstructionFindUniqueArgs>(args: SelectSubset<T, InstructionFindUniqueArgs<ExtArgs>>): Prisma__InstructionClient<$Result.GetResult<Prisma.$InstructionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Instruction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InstructionFindUniqueOrThrowArgs} args - Arguments to find a Instruction
     * @example
     * // Get one Instruction
     * const instruction = await prisma.instruction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InstructionFindUniqueOrThrowArgs>(args: SelectSubset<T, InstructionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InstructionClient<$Result.GetResult<Prisma.$InstructionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Instruction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstructionFindFirstArgs} args - Arguments to find a Instruction
     * @example
     * // Get one Instruction
     * const instruction = await prisma.instruction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InstructionFindFirstArgs>(args?: SelectSubset<T, InstructionFindFirstArgs<ExtArgs>>): Prisma__InstructionClient<$Result.GetResult<Prisma.$InstructionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Instruction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstructionFindFirstOrThrowArgs} args - Arguments to find a Instruction
     * @example
     * // Get one Instruction
     * const instruction = await prisma.instruction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InstructionFindFirstOrThrowArgs>(args?: SelectSubset<T, InstructionFindFirstOrThrowArgs<ExtArgs>>): Prisma__InstructionClient<$Result.GetResult<Prisma.$InstructionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Instructions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstructionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Instructions
     * const instructions = await prisma.instruction.findMany()
     * 
     * // Get first 10 Instructions
     * const instructions = await prisma.instruction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const instructionWithIdOnly = await prisma.instruction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InstructionFindManyArgs>(args?: SelectSubset<T, InstructionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InstructionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Instruction.
     * @param {InstructionCreateArgs} args - Arguments to create a Instruction.
     * @example
     * // Create one Instruction
     * const Instruction = await prisma.instruction.create({
     *   data: {
     *     // ... data to create a Instruction
     *   }
     * })
     * 
     */
    create<T extends InstructionCreateArgs>(args: SelectSubset<T, InstructionCreateArgs<ExtArgs>>): Prisma__InstructionClient<$Result.GetResult<Prisma.$InstructionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Instructions.
     * @param {InstructionCreateManyArgs} args - Arguments to create many Instructions.
     * @example
     * // Create many Instructions
     * const instruction = await prisma.instruction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InstructionCreateManyArgs>(args?: SelectSubset<T, InstructionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Instructions and returns the data saved in the database.
     * @param {InstructionCreateManyAndReturnArgs} args - Arguments to create many Instructions.
     * @example
     * // Create many Instructions
     * const instruction = await prisma.instruction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Instructions and only return the `id`
     * const instructionWithIdOnly = await prisma.instruction.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InstructionCreateManyAndReturnArgs>(args?: SelectSubset<T, InstructionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InstructionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Instruction.
     * @param {InstructionDeleteArgs} args - Arguments to delete one Instruction.
     * @example
     * // Delete one Instruction
     * const Instruction = await prisma.instruction.delete({
     *   where: {
     *     // ... filter to delete one Instruction
     *   }
     * })
     * 
     */
    delete<T extends InstructionDeleteArgs>(args: SelectSubset<T, InstructionDeleteArgs<ExtArgs>>): Prisma__InstructionClient<$Result.GetResult<Prisma.$InstructionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Instruction.
     * @param {InstructionUpdateArgs} args - Arguments to update one Instruction.
     * @example
     * // Update one Instruction
     * const instruction = await prisma.instruction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InstructionUpdateArgs>(args: SelectSubset<T, InstructionUpdateArgs<ExtArgs>>): Prisma__InstructionClient<$Result.GetResult<Prisma.$InstructionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Instructions.
     * @param {InstructionDeleteManyArgs} args - Arguments to filter Instructions to delete.
     * @example
     * // Delete a few Instructions
     * const { count } = await prisma.instruction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InstructionDeleteManyArgs>(args?: SelectSubset<T, InstructionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Instructions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstructionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Instructions
     * const instruction = await prisma.instruction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InstructionUpdateManyArgs>(args: SelectSubset<T, InstructionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Instructions and returns the data updated in the database.
     * @param {InstructionUpdateManyAndReturnArgs} args - Arguments to update many Instructions.
     * @example
     * // Update many Instructions
     * const instruction = await prisma.instruction.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Instructions and only return the `id`
     * const instructionWithIdOnly = await prisma.instruction.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends InstructionUpdateManyAndReturnArgs>(args: SelectSubset<T, InstructionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InstructionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Instruction.
     * @param {InstructionUpsertArgs} args - Arguments to update or create a Instruction.
     * @example
     * // Update or create a Instruction
     * const instruction = await prisma.instruction.upsert({
     *   create: {
     *     // ... data to create a Instruction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Instruction we want to update
     *   }
     * })
     */
    upsert<T extends InstructionUpsertArgs>(args: SelectSubset<T, InstructionUpsertArgs<ExtArgs>>): Prisma__InstructionClient<$Result.GetResult<Prisma.$InstructionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Instructions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstructionCountArgs} args - Arguments to filter Instructions to count.
     * @example
     * // Count the number of Instructions
     * const count = await prisma.instruction.count({
     *   where: {
     *     // ... the filter for the Instructions we want to count
     *   }
     * })
    **/
    count<T extends InstructionCountArgs>(
      args?: Subset<T, InstructionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InstructionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Instruction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstructionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InstructionAggregateArgs>(args: Subset<T, InstructionAggregateArgs>): Prisma.PrismaPromise<GetInstructionAggregateType<T>>

    /**
     * Group by Instruction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstructionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends InstructionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InstructionGroupByArgs['orderBy'] }
        : { orderBy?: InstructionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, InstructionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInstructionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Instruction model
   */
  readonly fields: InstructionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Instruction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InstructionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    video<T extends VideoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VideoDefaultArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Instruction model
   */
  interface InstructionFieldRefs {
    readonly id: FieldRef<"Instruction", 'String'>
    readonly videoId: FieldRef<"Instruction", 'String'>
    readonly type: FieldRef<"Instruction", 'InstructionType'>
    readonly params: FieldRef<"Instruction", 'Json'>
    readonly sequence: FieldRef<"Instruction", 'Int'>
    readonly createdAt: FieldRef<"Instruction", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Instruction findUnique
   */
  export type InstructionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instruction
     */
    select?: InstructionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instruction
     */
    omit?: InstructionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstructionInclude<ExtArgs> | null
    /**
     * Filter, which Instruction to fetch.
     */
    where: InstructionWhereUniqueInput
  }

  /**
   * Instruction findUniqueOrThrow
   */
  export type InstructionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instruction
     */
    select?: InstructionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instruction
     */
    omit?: InstructionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstructionInclude<ExtArgs> | null
    /**
     * Filter, which Instruction to fetch.
     */
    where: InstructionWhereUniqueInput
  }

  /**
   * Instruction findFirst
   */
  export type InstructionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instruction
     */
    select?: InstructionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instruction
     */
    omit?: InstructionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstructionInclude<ExtArgs> | null
    /**
     * Filter, which Instruction to fetch.
     */
    where?: InstructionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Instructions to fetch.
     */
    orderBy?: InstructionOrderByWithRelationInput | InstructionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Instructions.
     */
    cursor?: InstructionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Instructions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Instructions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Instructions.
     */
    distinct?: InstructionScalarFieldEnum | InstructionScalarFieldEnum[]
  }

  /**
   * Instruction findFirstOrThrow
   */
  export type InstructionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instruction
     */
    select?: InstructionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instruction
     */
    omit?: InstructionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstructionInclude<ExtArgs> | null
    /**
     * Filter, which Instruction to fetch.
     */
    where?: InstructionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Instructions to fetch.
     */
    orderBy?: InstructionOrderByWithRelationInput | InstructionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Instructions.
     */
    cursor?: InstructionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Instructions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Instructions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Instructions.
     */
    distinct?: InstructionScalarFieldEnum | InstructionScalarFieldEnum[]
  }

  /**
   * Instruction findMany
   */
  export type InstructionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instruction
     */
    select?: InstructionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instruction
     */
    omit?: InstructionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstructionInclude<ExtArgs> | null
    /**
     * Filter, which Instructions to fetch.
     */
    where?: InstructionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Instructions to fetch.
     */
    orderBy?: InstructionOrderByWithRelationInput | InstructionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Instructions.
     */
    cursor?: InstructionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Instructions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Instructions.
     */
    skip?: number
    distinct?: InstructionScalarFieldEnum | InstructionScalarFieldEnum[]
  }

  /**
   * Instruction create
   */
  export type InstructionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instruction
     */
    select?: InstructionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instruction
     */
    omit?: InstructionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstructionInclude<ExtArgs> | null
    /**
     * The data needed to create a Instruction.
     */
    data: XOR<InstructionCreateInput, InstructionUncheckedCreateInput>
  }

  /**
   * Instruction createMany
   */
  export type InstructionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Instructions.
     */
    data: InstructionCreateManyInput | InstructionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Instruction createManyAndReturn
   */
  export type InstructionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instruction
     */
    select?: InstructionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Instruction
     */
    omit?: InstructionOmit<ExtArgs> | null
    /**
     * The data used to create many Instructions.
     */
    data: InstructionCreateManyInput | InstructionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstructionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Instruction update
   */
  export type InstructionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instruction
     */
    select?: InstructionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instruction
     */
    omit?: InstructionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstructionInclude<ExtArgs> | null
    /**
     * The data needed to update a Instruction.
     */
    data: XOR<InstructionUpdateInput, InstructionUncheckedUpdateInput>
    /**
     * Choose, which Instruction to update.
     */
    where: InstructionWhereUniqueInput
  }

  /**
   * Instruction updateMany
   */
  export type InstructionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Instructions.
     */
    data: XOR<InstructionUpdateManyMutationInput, InstructionUncheckedUpdateManyInput>
    /**
     * Filter which Instructions to update
     */
    where?: InstructionWhereInput
    /**
     * Limit how many Instructions to update.
     */
    limit?: number
  }

  /**
   * Instruction updateManyAndReturn
   */
  export type InstructionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instruction
     */
    select?: InstructionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Instruction
     */
    omit?: InstructionOmit<ExtArgs> | null
    /**
     * The data used to update Instructions.
     */
    data: XOR<InstructionUpdateManyMutationInput, InstructionUncheckedUpdateManyInput>
    /**
     * Filter which Instructions to update
     */
    where?: InstructionWhereInput
    /**
     * Limit how many Instructions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstructionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Instruction upsert
   */
  export type InstructionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instruction
     */
    select?: InstructionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instruction
     */
    omit?: InstructionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstructionInclude<ExtArgs> | null
    /**
     * The filter to search for the Instruction to update in case it exists.
     */
    where: InstructionWhereUniqueInput
    /**
     * In case the Instruction found by the `where` argument doesn't exist, create a new Instruction with this data.
     */
    create: XOR<InstructionCreateInput, InstructionUncheckedCreateInput>
    /**
     * In case the Instruction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InstructionUpdateInput, InstructionUncheckedUpdateInput>
  }

  /**
   * Instruction delete
   */
  export type InstructionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instruction
     */
    select?: InstructionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instruction
     */
    omit?: InstructionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstructionInclude<ExtArgs> | null
    /**
     * Filter which Instruction to delete.
     */
    where: InstructionWhereUniqueInput
  }

  /**
   * Instruction deleteMany
   */
  export type InstructionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Instructions to delete
     */
    where?: InstructionWhereInput
    /**
     * Limit how many Instructions to delete.
     */
    limit?: number
  }

  /**
   * Instruction without action
   */
  export type InstructionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instruction
     */
    select?: InstructionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instruction
     */
    omit?: InstructionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstructionInclude<ExtArgs> | null
  }


  /**
   * Model RenderJob
   */

  export type AggregateRenderJob = {
    _count: RenderJobCountAggregateOutputType | null
    _min: RenderJobMinAggregateOutputType | null
    _max: RenderJobMaxAggregateOutputType | null
  }

  export type RenderJobMinAggregateOutputType = {
    id: string | null
    videoId: string | null
    status: $Enums.JobStatus | null
    outputUrl: string | null
    errorMessage: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RenderJobMaxAggregateOutputType = {
    id: string | null
    videoId: string | null
    status: $Enums.JobStatus | null
    outputUrl: string | null
    errorMessage: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RenderJobCountAggregateOutputType = {
    id: number
    videoId: number
    status: number
    outputUrl: number
    errorMessage: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RenderJobMinAggregateInputType = {
    id?: true
    videoId?: true
    status?: true
    outputUrl?: true
    errorMessage?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RenderJobMaxAggregateInputType = {
    id?: true
    videoId?: true
    status?: true
    outputUrl?: true
    errorMessage?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RenderJobCountAggregateInputType = {
    id?: true
    videoId?: true
    status?: true
    outputUrl?: true
    errorMessage?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RenderJobAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RenderJob to aggregate.
     */
    where?: RenderJobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RenderJobs to fetch.
     */
    orderBy?: RenderJobOrderByWithRelationInput | RenderJobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RenderJobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RenderJobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RenderJobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RenderJobs
    **/
    _count?: true | RenderJobCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RenderJobMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RenderJobMaxAggregateInputType
  }

  export type GetRenderJobAggregateType<T extends RenderJobAggregateArgs> = {
        [P in keyof T & keyof AggregateRenderJob]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRenderJob[P]>
      : GetScalarType<T[P], AggregateRenderJob[P]>
  }




  export type RenderJobGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RenderJobWhereInput
    orderBy?: RenderJobOrderByWithAggregationInput | RenderJobOrderByWithAggregationInput[]
    by: RenderJobScalarFieldEnum[] | RenderJobScalarFieldEnum
    having?: RenderJobScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RenderJobCountAggregateInputType | true
    _min?: RenderJobMinAggregateInputType
    _max?: RenderJobMaxAggregateInputType
  }

  export type RenderJobGroupByOutputType = {
    id: string
    videoId: string
    status: $Enums.JobStatus
    outputUrl: string | null
    errorMessage: string | null
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: RenderJobCountAggregateOutputType | null
    _min: RenderJobMinAggregateOutputType | null
    _max: RenderJobMaxAggregateOutputType | null
  }

  type GetRenderJobGroupByPayload<T extends RenderJobGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RenderJobGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RenderJobGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RenderJobGroupByOutputType[P]>
            : GetScalarType<T[P], RenderJobGroupByOutputType[P]>
        }
      >
    >


  export type RenderJobSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    videoId?: boolean
    status?: boolean
    outputUrl?: boolean
    errorMessage?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    video?: boolean | VideoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["renderJob"]>

  export type RenderJobSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    videoId?: boolean
    status?: boolean
    outputUrl?: boolean
    errorMessage?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    video?: boolean | VideoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["renderJob"]>

  export type RenderJobSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    videoId?: boolean
    status?: boolean
    outputUrl?: boolean
    errorMessage?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    video?: boolean | VideoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["renderJob"]>

  export type RenderJobSelectScalar = {
    id?: boolean
    videoId?: boolean
    status?: boolean
    outputUrl?: boolean
    errorMessage?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RenderJobOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "videoId" | "status" | "outputUrl" | "errorMessage" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["renderJob"]>
  export type RenderJobInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    video?: boolean | VideoDefaultArgs<ExtArgs>
  }
  export type RenderJobIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    video?: boolean | VideoDefaultArgs<ExtArgs>
  }
  export type RenderJobIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    video?: boolean | VideoDefaultArgs<ExtArgs>
  }

  export type $RenderJobPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RenderJob"
    objects: {
      video: Prisma.$VideoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      videoId: string
      status: $Enums.JobStatus
      outputUrl: string | null
      errorMessage: string | null
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["renderJob"]>
    composites: {}
  }

  type RenderJobGetPayload<S extends boolean | null | undefined | RenderJobDefaultArgs> = $Result.GetResult<Prisma.$RenderJobPayload, S>

  type RenderJobCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RenderJobFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RenderJobCountAggregateInputType | true
    }

  export interface RenderJobDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RenderJob'], meta: { name: 'RenderJob' } }
    /**
     * Find zero or one RenderJob that matches the filter.
     * @param {RenderJobFindUniqueArgs} args - Arguments to find a RenderJob
     * @example
     * // Get one RenderJob
     * const renderJob = await prisma.renderJob.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RenderJobFindUniqueArgs>(args: SelectSubset<T, RenderJobFindUniqueArgs<ExtArgs>>): Prisma__RenderJobClient<$Result.GetResult<Prisma.$RenderJobPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RenderJob that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RenderJobFindUniqueOrThrowArgs} args - Arguments to find a RenderJob
     * @example
     * // Get one RenderJob
     * const renderJob = await prisma.renderJob.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RenderJobFindUniqueOrThrowArgs>(args: SelectSubset<T, RenderJobFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RenderJobClient<$Result.GetResult<Prisma.$RenderJobPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RenderJob that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RenderJobFindFirstArgs} args - Arguments to find a RenderJob
     * @example
     * // Get one RenderJob
     * const renderJob = await prisma.renderJob.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RenderJobFindFirstArgs>(args?: SelectSubset<T, RenderJobFindFirstArgs<ExtArgs>>): Prisma__RenderJobClient<$Result.GetResult<Prisma.$RenderJobPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RenderJob that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RenderJobFindFirstOrThrowArgs} args - Arguments to find a RenderJob
     * @example
     * // Get one RenderJob
     * const renderJob = await prisma.renderJob.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RenderJobFindFirstOrThrowArgs>(args?: SelectSubset<T, RenderJobFindFirstOrThrowArgs<ExtArgs>>): Prisma__RenderJobClient<$Result.GetResult<Prisma.$RenderJobPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RenderJobs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RenderJobFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RenderJobs
     * const renderJobs = await prisma.renderJob.findMany()
     * 
     * // Get first 10 RenderJobs
     * const renderJobs = await prisma.renderJob.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const renderJobWithIdOnly = await prisma.renderJob.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RenderJobFindManyArgs>(args?: SelectSubset<T, RenderJobFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RenderJobPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RenderJob.
     * @param {RenderJobCreateArgs} args - Arguments to create a RenderJob.
     * @example
     * // Create one RenderJob
     * const RenderJob = await prisma.renderJob.create({
     *   data: {
     *     // ... data to create a RenderJob
     *   }
     * })
     * 
     */
    create<T extends RenderJobCreateArgs>(args: SelectSubset<T, RenderJobCreateArgs<ExtArgs>>): Prisma__RenderJobClient<$Result.GetResult<Prisma.$RenderJobPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RenderJobs.
     * @param {RenderJobCreateManyArgs} args - Arguments to create many RenderJobs.
     * @example
     * // Create many RenderJobs
     * const renderJob = await prisma.renderJob.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RenderJobCreateManyArgs>(args?: SelectSubset<T, RenderJobCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RenderJobs and returns the data saved in the database.
     * @param {RenderJobCreateManyAndReturnArgs} args - Arguments to create many RenderJobs.
     * @example
     * // Create many RenderJobs
     * const renderJob = await prisma.renderJob.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RenderJobs and only return the `id`
     * const renderJobWithIdOnly = await prisma.renderJob.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RenderJobCreateManyAndReturnArgs>(args?: SelectSubset<T, RenderJobCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RenderJobPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RenderJob.
     * @param {RenderJobDeleteArgs} args - Arguments to delete one RenderJob.
     * @example
     * // Delete one RenderJob
     * const RenderJob = await prisma.renderJob.delete({
     *   where: {
     *     // ... filter to delete one RenderJob
     *   }
     * })
     * 
     */
    delete<T extends RenderJobDeleteArgs>(args: SelectSubset<T, RenderJobDeleteArgs<ExtArgs>>): Prisma__RenderJobClient<$Result.GetResult<Prisma.$RenderJobPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RenderJob.
     * @param {RenderJobUpdateArgs} args - Arguments to update one RenderJob.
     * @example
     * // Update one RenderJob
     * const renderJob = await prisma.renderJob.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RenderJobUpdateArgs>(args: SelectSubset<T, RenderJobUpdateArgs<ExtArgs>>): Prisma__RenderJobClient<$Result.GetResult<Prisma.$RenderJobPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RenderJobs.
     * @param {RenderJobDeleteManyArgs} args - Arguments to filter RenderJobs to delete.
     * @example
     * // Delete a few RenderJobs
     * const { count } = await prisma.renderJob.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RenderJobDeleteManyArgs>(args?: SelectSubset<T, RenderJobDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RenderJobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RenderJobUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RenderJobs
     * const renderJob = await prisma.renderJob.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RenderJobUpdateManyArgs>(args: SelectSubset<T, RenderJobUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RenderJobs and returns the data updated in the database.
     * @param {RenderJobUpdateManyAndReturnArgs} args - Arguments to update many RenderJobs.
     * @example
     * // Update many RenderJobs
     * const renderJob = await prisma.renderJob.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RenderJobs and only return the `id`
     * const renderJobWithIdOnly = await prisma.renderJob.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RenderJobUpdateManyAndReturnArgs>(args: SelectSubset<T, RenderJobUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RenderJobPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RenderJob.
     * @param {RenderJobUpsertArgs} args - Arguments to update or create a RenderJob.
     * @example
     * // Update or create a RenderJob
     * const renderJob = await prisma.renderJob.upsert({
     *   create: {
     *     // ... data to create a RenderJob
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RenderJob we want to update
     *   }
     * })
     */
    upsert<T extends RenderJobUpsertArgs>(args: SelectSubset<T, RenderJobUpsertArgs<ExtArgs>>): Prisma__RenderJobClient<$Result.GetResult<Prisma.$RenderJobPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RenderJobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RenderJobCountArgs} args - Arguments to filter RenderJobs to count.
     * @example
     * // Count the number of RenderJobs
     * const count = await prisma.renderJob.count({
     *   where: {
     *     // ... the filter for the RenderJobs we want to count
     *   }
     * })
    **/
    count<T extends RenderJobCountArgs>(
      args?: Subset<T, RenderJobCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RenderJobCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RenderJob.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RenderJobAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RenderJobAggregateArgs>(args: Subset<T, RenderJobAggregateArgs>): Prisma.PrismaPromise<GetRenderJobAggregateType<T>>

    /**
     * Group by RenderJob.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RenderJobGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RenderJobGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RenderJobGroupByArgs['orderBy'] }
        : { orderBy?: RenderJobGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RenderJobGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRenderJobGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RenderJob model
   */
  readonly fields: RenderJobFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RenderJob.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RenderJobClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    video<T extends VideoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VideoDefaultArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RenderJob model
   */
  interface RenderJobFieldRefs {
    readonly id: FieldRef<"RenderJob", 'String'>
    readonly videoId: FieldRef<"RenderJob", 'String'>
    readonly status: FieldRef<"RenderJob", 'JobStatus'>
    readonly outputUrl: FieldRef<"RenderJob", 'String'>
    readonly errorMessage: FieldRef<"RenderJob", 'String'>
    readonly isActive: FieldRef<"RenderJob", 'Boolean'>
    readonly createdAt: FieldRef<"RenderJob", 'DateTime'>
    readonly updatedAt: FieldRef<"RenderJob", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RenderJob findUnique
   */
  export type RenderJobFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RenderJob
     */
    select?: RenderJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RenderJob
     */
    omit?: RenderJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RenderJobInclude<ExtArgs> | null
    /**
     * Filter, which RenderJob to fetch.
     */
    where: RenderJobWhereUniqueInput
  }

  /**
   * RenderJob findUniqueOrThrow
   */
  export type RenderJobFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RenderJob
     */
    select?: RenderJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RenderJob
     */
    omit?: RenderJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RenderJobInclude<ExtArgs> | null
    /**
     * Filter, which RenderJob to fetch.
     */
    where: RenderJobWhereUniqueInput
  }

  /**
   * RenderJob findFirst
   */
  export type RenderJobFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RenderJob
     */
    select?: RenderJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RenderJob
     */
    omit?: RenderJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RenderJobInclude<ExtArgs> | null
    /**
     * Filter, which RenderJob to fetch.
     */
    where?: RenderJobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RenderJobs to fetch.
     */
    orderBy?: RenderJobOrderByWithRelationInput | RenderJobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RenderJobs.
     */
    cursor?: RenderJobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RenderJobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RenderJobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RenderJobs.
     */
    distinct?: RenderJobScalarFieldEnum | RenderJobScalarFieldEnum[]
  }

  /**
   * RenderJob findFirstOrThrow
   */
  export type RenderJobFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RenderJob
     */
    select?: RenderJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RenderJob
     */
    omit?: RenderJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RenderJobInclude<ExtArgs> | null
    /**
     * Filter, which RenderJob to fetch.
     */
    where?: RenderJobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RenderJobs to fetch.
     */
    orderBy?: RenderJobOrderByWithRelationInput | RenderJobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RenderJobs.
     */
    cursor?: RenderJobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RenderJobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RenderJobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RenderJobs.
     */
    distinct?: RenderJobScalarFieldEnum | RenderJobScalarFieldEnum[]
  }

  /**
   * RenderJob findMany
   */
  export type RenderJobFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RenderJob
     */
    select?: RenderJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RenderJob
     */
    omit?: RenderJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RenderJobInclude<ExtArgs> | null
    /**
     * Filter, which RenderJobs to fetch.
     */
    where?: RenderJobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RenderJobs to fetch.
     */
    orderBy?: RenderJobOrderByWithRelationInput | RenderJobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RenderJobs.
     */
    cursor?: RenderJobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RenderJobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RenderJobs.
     */
    skip?: number
    distinct?: RenderJobScalarFieldEnum | RenderJobScalarFieldEnum[]
  }

  /**
   * RenderJob create
   */
  export type RenderJobCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RenderJob
     */
    select?: RenderJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RenderJob
     */
    omit?: RenderJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RenderJobInclude<ExtArgs> | null
    /**
     * The data needed to create a RenderJob.
     */
    data: XOR<RenderJobCreateInput, RenderJobUncheckedCreateInput>
  }

  /**
   * RenderJob createMany
   */
  export type RenderJobCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RenderJobs.
     */
    data: RenderJobCreateManyInput | RenderJobCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RenderJob createManyAndReturn
   */
  export type RenderJobCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RenderJob
     */
    select?: RenderJobSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RenderJob
     */
    omit?: RenderJobOmit<ExtArgs> | null
    /**
     * The data used to create many RenderJobs.
     */
    data: RenderJobCreateManyInput | RenderJobCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RenderJobIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RenderJob update
   */
  export type RenderJobUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RenderJob
     */
    select?: RenderJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RenderJob
     */
    omit?: RenderJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RenderJobInclude<ExtArgs> | null
    /**
     * The data needed to update a RenderJob.
     */
    data: XOR<RenderJobUpdateInput, RenderJobUncheckedUpdateInput>
    /**
     * Choose, which RenderJob to update.
     */
    where: RenderJobWhereUniqueInput
  }

  /**
   * RenderJob updateMany
   */
  export type RenderJobUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RenderJobs.
     */
    data: XOR<RenderJobUpdateManyMutationInput, RenderJobUncheckedUpdateManyInput>
    /**
     * Filter which RenderJobs to update
     */
    where?: RenderJobWhereInput
    /**
     * Limit how many RenderJobs to update.
     */
    limit?: number
  }

  /**
   * RenderJob updateManyAndReturn
   */
  export type RenderJobUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RenderJob
     */
    select?: RenderJobSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RenderJob
     */
    omit?: RenderJobOmit<ExtArgs> | null
    /**
     * The data used to update RenderJobs.
     */
    data: XOR<RenderJobUpdateManyMutationInput, RenderJobUncheckedUpdateManyInput>
    /**
     * Filter which RenderJobs to update
     */
    where?: RenderJobWhereInput
    /**
     * Limit how many RenderJobs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RenderJobIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RenderJob upsert
   */
  export type RenderJobUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RenderJob
     */
    select?: RenderJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RenderJob
     */
    omit?: RenderJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RenderJobInclude<ExtArgs> | null
    /**
     * The filter to search for the RenderJob to update in case it exists.
     */
    where: RenderJobWhereUniqueInput
    /**
     * In case the RenderJob found by the `where` argument doesn't exist, create a new RenderJob with this data.
     */
    create: XOR<RenderJobCreateInput, RenderJobUncheckedCreateInput>
    /**
     * In case the RenderJob was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RenderJobUpdateInput, RenderJobUncheckedUpdateInput>
  }

  /**
   * RenderJob delete
   */
  export type RenderJobDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RenderJob
     */
    select?: RenderJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RenderJob
     */
    omit?: RenderJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RenderJobInclude<ExtArgs> | null
    /**
     * Filter which RenderJob to delete.
     */
    where: RenderJobWhereUniqueInput
  }

  /**
   * RenderJob deleteMany
   */
  export type RenderJobDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RenderJobs to delete
     */
    where?: RenderJobWhereInput
    /**
     * Limit how many RenderJobs to delete.
     */
    limit?: number
  }

  /**
   * RenderJob without action
   */
  export type RenderJobDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RenderJob
     */
    select?: RenderJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RenderJob
     */
    omit?: RenderJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RenderJobInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const VideoScalarFieldEnum: {
    id: 'id',
    filename: 'filename',
    path: 'path',
    size: 'size',
    duration: 'duration',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    orignalId: 'orignalId'
  };

  export type VideoScalarFieldEnum = (typeof VideoScalarFieldEnum)[keyof typeof VideoScalarFieldEnum]


  export const InstructionScalarFieldEnum: {
    id: 'id',
    videoId: 'videoId',
    type: 'type',
    params: 'params',
    sequence: 'sequence',
    createdAt: 'createdAt'
  };

  export type InstructionScalarFieldEnum = (typeof InstructionScalarFieldEnum)[keyof typeof InstructionScalarFieldEnum]


  export const RenderJobScalarFieldEnum: {
    id: 'id',
    videoId: 'videoId',
    status: 'status',
    outputUrl: 'outputUrl',
    errorMessage: 'errorMessage',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RenderJobScalarFieldEnum = (typeof RenderJobScalarFieldEnum)[keyof typeof RenderJobScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Status'
   */
  export type EnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status'>
    


  /**
   * Reference to a field of type 'Status[]'
   */
  export type ListEnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'InstructionType'
   */
  export type EnumInstructionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'InstructionType'>
    


  /**
   * Reference to a field of type 'InstructionType[]'
   */
  export type ListEnumInstructionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'InstructionType[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'JobStatus'
   */
  export type EnumJobStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'JobStatus'>
    


  /**
   * Reference to a field of type 'JobStatus[]'
   */
  export type ListEnumJobStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'JobStatus[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    
  /**
   * Deep Input Types
   */


  export type VideoWhereInput = {
    AND?: VideoWhereInput | VideoWhereInput[]
    OR?: VideoWhereInput[]
    NOT?: VideoWhereInput | VideoWhereInput[]
    id?: StringFilter<"Video"> | string
    filename?: StringFilter<"Video"> | string
    path?: StringFilter<"Video"> | string
    size?: IntFilter<"Video"> | number
    duration?: FloatNullableFilter<"Video"> | number | null
    status?: EnumStatusFilter<"Video"> | $Enums.Status
    createdAt?: DateTimeFilter<"Video"> | Date | string
    updatedAt?: DateTimeFilter<"Video"> | Date | string
    orignalId?: StringNullableFilter<"Video"> | string | null
    instructions?: InstructionListRelationFilter
    renderJobs?: RenderJobListRelationFilter
    orignal?: XOR<VideoNullableScalarRelationFilter, VideoWhereInput> | null
    copies?: VideoListRelationFilter
  }

  export type VideoOrderByWithRelationInput = {
    id?: SortOrder
    filename?: SortOrder
    path?: SortOrder
    size?: SortOrder
    duration?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    orignalId?: SortOrderInput | SortOrder
    instructions?: InstructionOrderByRelationAggregateInput
    renderJobs?: RenderJobOrderByRelationAggregateInput
    orignal?: VideoOrderByWithRelationInput
    copies?: VideoOrderByRelationAggregateInput
  }

  export type VideoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: VideoWhereInput | VideoWhereInput[]
    OR?: VideoWhereInput[]
    NOT?: VideoWhereInput | VideoWhereInput[]
    filename?: StringFilter<"Video"> | string
    path?: StringFilter<"Video"> | string
    size?: IntFilter<"Video"> | number
    duration?: FloatNullableFilter<"Video"> | number | null
    status?: EnumStatusFilter<"Video"> | $Enums.Status
    createdAt?: DateTimeFilter<"Video"> | Date | string
    updatedAt?: DateTimeFilter<"Video"> | Date | string
    orignalId?: StringNullableFilter<"Video"> | string | null
    instructions?: InstructionListRelationFilter
    renderJobs?: RenderJobListRelationFilter
    orignal?: XOR<VideoNullableScalarRelationFilter, VideoWhereInput> | null
    copies?: VideoListRelationFilter
  }, "id">

  export type VideoOrderByWithAggregationInput = {
    id?: SortOrder
    filename?: SortOrder
    path?: SortOrder
    size?: SortOrder
    duration?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    orignalId?: SortOrderInput | SortOrder
    _count?: VideoCountOrderByAggregateInput
    _avg?: VideoAvgOrderByAggregateInput
    _max?: VideoMaxOrderByAggregateInput
    _min?: VideoMinOrderByAggregateInput
    _sum?: VideoSumOrderByAggregateInput
  }

  export type VideoScalarWhereWithAggregatesInput = {
    AND?: VideoScalarWhereWithAggregatesInput | VideoScalarWhereWithAggregatesInput[]
    OR?: VideoScalarWhereWithAggregatesInput[]
    NOT?: VideoScalarWhereWithAggregatesInput | VideoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Video"> | string
    filename?: StringWithAggregatesFilter<"Video"> | string
    path?: StringWithAggregatesFilter<"Video"> | string
    size?: IntWithAggregatesFilter<"Video"> | number
    duration?: FloatNullableWithAggregatesFilter<"Video"> | number | null
    status?: EnumStatusWithAggregatesFilter<"Video"> | $Enums.Status
    createdAt?: DateTimeWithAggregatesFilter<"Video"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Video"> | Date | string
    orignalId?: StringNullableWithAggregatesFilter<"Video"> | string | null
  }

  export type InstructionWhereInput = {
    AND?: InstructionWhereInput | InstructionWhereInput[]
    OR?: InstructionWhereInput[]
    NOT?: InstructionWhereInput | InstructionWhereInput[]
    id?: StringFilter<"Instruction"> | string
    videoId?: StringFilter<"Instruction"> | string
    type?: EnumInstructionTypeFilter<"Instruction"> | $Enums.InstructionType
    params?: JsonFilter<"Instruction">
    sequence?: IntFilter<"Instruction"> | number
    createdAt?: DateTimeFilter<"Instruction"> | Date | string
    video?: XOR<VideoScalarRelationFilter, VideoWhereInput>
  }

  export type InstructionOrderByWithRelationInput = {
    id?: SortOrder
    videoId?: SortOrder
    type?: SortOrder
    params?: SortOrder
    sequence?: SortOrder
    createdAt?: SortOrder
    video?: VideoOrderByWithRelationInput
  }

  export type InstructionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: InstructionWhereInput | InstructionWhereInput[]
    OR?: InstructionWhereInput[]
    NOT?: InstructionWhereInput | InstructionWhereInput[]
    videoId?: StringFilter<"Instruction"> | string
    type?: EnumInstructionTypeFilter<"Instruction"> | $Enums.InstructionType
    params?: JsonFilter<"Instruction">
    sequence?: IntFilter<"Instruction"> | number
    createdAt?: DateTimeFilter<"Instruction"> | Date | string
    video?: XOR<VideoScalarRelationFilter, VideoWhereInput>
  }, "id">

  export type InstructionOrderByWithAggregationInput = {
    id?: SortOrder
    videoId?: SortOrder
    type?: SortOrder
    params?: SortOrder
    sequence?: SortOrder
    createdAt?: SortOrder
    _count?: InstructionCountOrderByAggregateInput
    _avg?: InstructionAvgOrderByAggregateInput
    _max?: InstructionMaxOrderByAggregateInput
    _min?: InstructionMinOrderByAggregateInput
    _sum?: InstructionSumOrderByAggregateInput
  }

  export type InstructionScalarWhereWithAggregatesInput = {
    AND?: InstructionScalarWhereWithAggregatesInput | InstructionScalarWhereWithAggregatesInput[]
    OR?: InstructionScalarWhereWithAggregatesInput[]
    NOT?: InstructionScalarWhereWithAggregatesInput | InstructionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Instruction"> | string
    videoId?: StringWithAggregatesFilter<"Instruction"> | string
    type?: EnumInstructionTypeWithAggregatesFilter<"Instruction"> | $Enums.InstructionType
    params?: JsonWithAggregatesFilter<"Instruction">
    sequence?: IntWithAggregatesFilter<"Instruction"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Instruction"> | Date | string
  }

  export type RenderJobWhereInput = {
    AND?: RenderJobWhereInput | RenderJobWhereInput[]
    OR?: RenderJobWhereInput[]
    NOT?: RenderJobWhereInput | RenderJobWhereInput[]
    id?: StringFilter<"RenderJob"> | string
    videoId?: StringFilter<"RenderJob"> | string
    status?: EnumJobStatusFilter<"RenderJob"> | $Enums.JobStatus
    outputUrl?: StringNullableFilter<"RenderJob"> | string | null
    errorMessage?: StringNullableFilter<"RenderJob"> | string | null
    isActive?: BoolFilter<"RenderJob"> | boolean
    createdAt?: DateTimeFilter<"RenderJob"> | Date | string
    updatedAt?: DateTimeFilter<"RenderJob"> | Date | string
    video?: XOR<VideoScalarRelationFilter, VideoWhereInput>
  }

  export type RenderJobOrderByWithRelationInput = {
    id?: SortOrder
    videoId?: SortOrder
    status?: SortOrder
    outputUrl?: SortOrderInput | SortOrder
    errorMessage?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    video?: VideoOrderByWithRelationInput
  }

  export type RenderJobWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RenderJobWhereInput | RenderJobWhereInput[]
    OR?: RenderJobWhereInput[]
    NOT?: RenderJobWhereInput | RenderJobWhereInput[]
    videoId?: StringFilter<"RenderJob"> | string
    status?: EnumJobStatusFilter<"RenderJob"> | $Enums.JobStatus
    outputUrl?: StringNullableFilter<"RenderJob"> | string | null
    errorMessage?: StringNullableFilter<"RenderJob"> | string | null
    isActive?: BoolFilter<"RenderJob"> | boolean
    createdAt?: DateTimeFilter<"RenderJob"> | Date | string
    updatedAt?: DateTimeFilter<"RenderJob"> | Date | string
    video?: XOR<VideoScalarRelationFilter, VideoWhereInput>
  }, "id">

  export type RenderJobOrderByWithAggregationInput = {
    id?: SortOrder
    videoId?: SortOrder
    status?: SortOrder
    outputUrl?: SortOrderInput | SortOrder
    errorMessage?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RenderJobCountOrderByAggregateInput
    _max?: RenderJobMaxOrderByAggregateInput
    _min?: RenderJobMinOrderByAggregateInput
  }

  export type RenderJobScalarWhereWithAggregatesInput = {
    AND?: RenderJobScalarWhereWithAggregatesInput | RenderJobScalarWhereWithAggregatesInput[]
    OR?: RenderJobScalarWhereWithAggregatesInput[]
    NOT?: RenderJobScalarWhereWithAggregatesInput | RenderJobScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RenderJob"> | string
    videoId?: StringWithAggregatesFilter<"RenderJob"> | string
    status?: EnumJobStatusWithAggregatesFilter<"RenderJob"> | $Enums.JobStatus
    outputUrl?: StringNullableWithAggregatesFilter<"RenderJob"> | string | null
    errorMessage?: StringNullableWithAggregatesFilter<"RenderJob"> | string | null
    isActive?: BoolWithAggregatesFilter<"RenderJob"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"RenderJob"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"RenderJob"> | Date | string
  }

  export type VideoCreateInput = {
    id?: string
    filename: string
    path: string
    size: number
    duration?: number | null
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    instructions?: InstructionCreateNestedManyWithoutVideoInput
    renderJobs?: RenderJobCreateNestedManyWithoutVideoInput
    orignal?: VideoCreateNestedOneWithoutCopiesInput
    copies?: VideoCreateNestedManyWithoutOrignalInput
  }

  export type VideoUncheckedCreateInput = {
    id?: string
    filename: string
    path: string
    size: number
    duration?: number | null
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    orignalId?: string | null
    instructions?: InstructionUncheckedCreateNestedManyWithoutVideoInput
    renderJobs?: RenderJobUncheckedCreateNestedManyWithoutVideoInput
    copies?: VideoUncheckedCreateNestedManyWithoutOrignalInput
  }

  export type VideoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    duration?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    instructions?: InstructionUpdateManyWithoutVideoNestedInput
    renderJobs?: RenderJobUpdateManyWithoutVideoNestedInput
    orignal?: VideoUpdateOneWithoutCopiesNestedInput
    copies?: VideoUpdateManyWithoutOrignalNestedInput
  }

  export type VideoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    duration?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orignalId?: NullableStringFieldUpdateOperationsInput | string | null
    instructions?: InstructionUncheckedUpdateManyWithoutVideoNestedInput
    renderJobs?: RenderJobUncheckedUpdateManyWithoutVideoNestedInput
    copies?: VideoUncheckedUpdateManyWithoutOrignalNestedInput
  }

  export type VideoCreateManyInput = {
    id?: string
    filename: string
    path: string
    size: number
    duration?: number | null
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    orignalId?: string | null
  }

  export type VideoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    duration?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VideoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    duration?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orignalId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type InstructionCreateInput = {
    id?: string
    type: $Enums.InstructionType
    params: JsonNullValueInput | InputJsonValue
    sequence: number
    createdAt?: Date | string
    video: VideoCreateNestedOneWithoutInstructionsInput
  }

  export type InstructionUncheckedCreateInput = {
    id?: string
    videoId: string
    type: $Enums.InstructionType
    params: JsonNullValueInput | InputJsonValue
    sequence: number
    createdAt?: Date | string
  }

  export type InstructionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumInstructionTypeFieldUpdateOperationsInput | $Enums.InstructionType
    params?: JsonNullValueInput | InputJsonValue
    sequence?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    video?: VideoUpdateOneRequiredWithoutInstructionsNestedInput
  }

  export type InstructionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    videoId?: StringFieldUpdateOperationsInput | string
    type?: EnumInstructionTypeFieldUpdateOperationsInput | $Enums.InstructionType
    params?: JsonNullValueInput | InputJsonValue
    sequence?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InstructionCreateManyInput = {
    id?: string
    videoId: string
    type: $Enums.InstructionType
    params: JsonNullValueInput | InputJsonValue
    sequence: number
    createdAt?: Date | string
  }

  export type InstructionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumInstructionTypeFieldUpdateOperationsInput | $Enums.InstructionType
    params?: JsonNullValueInput | InputJsonValue
    sequence?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InstructionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    videoId?: StringFieldUpdateOperationsInput | string
    type?: EnumInstructionTypeFieldUpdateOperationsInput | $Enums.InstructionType
    params?: JsonNullValueInput | InputJsonValue
    sequence?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RenderJobCreateInput = {
    id?: string
    status: $Enums.JobStatus
    outputUrl?: string | null
    errorMessage?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    video: VideoCreateNestedOneWithoutRenderJobsInput
  }

  export type RenderJobUncheckedCreateInput = {
    id?: string
    videoId: string
    status: $Enums.JobStatus
    outputUrl?: string | null
    errorMessage?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RenderJobUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    outputUrl?: NullableStringFieldUpdateOperationsInput | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    video?: VideoUpdateOneRequiredWithoutRenderJobsNestedInput
  }

  export type RenderJobUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    videoId?: StringFieldUpdateOperationsInput | string
    status?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    outputUrl?: NullableStringFieldUpdateOperationsInput | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RenderJobCreateManyInput = {
    id?: string
    videoId: string
    status: $Enums.JobStatus
    outputUrl?: string | null
    errorMessage?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RenderJobUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    outputUrl?: NullableStringFieldUpdateOperationsInput | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RenderJobUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    videoId?: StringFieldUpdateOperationsInput | string
    status?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    outputUrl?: NullableStringFieldUpdateOperationsInput | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type EnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type InstructionListRelationFilter = {
    every?: InstructionWhereInput
    some?: InstructionWhereInput
    none?: InstructionWhereInput
  }

  export type RenderJobListRelationFilter = {
    every?: RenderJobWhereInput
    some?: RenderJobWhereInput
    none?: RenderJobWhereInput
  }

  export type VideoNullableScalarRelationFilter = {
    is?: VideoWhereInput | null
    isNot?: VideoWhereInput | null
  }

  export type VideoListRelationFilter = {
    every?: VideoWhereInput
    some?: VideoWhereInput
    none?: VideoWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type InstructionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RenderJobOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VideoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VideoCountOrderByAggregateInput = {
    id?: SortOrder
    filename?: SortOrder
    path?: SortOrder
    size?: SortOrder
    duration?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    orignalId?: SortOrder
  }

  export type VideoAvgOrderByAggregateInput = {
    size?: SortOrder
    duration?: SortOrder
  }

  export type VideoMaxOrderByAggregateInput = {
    id?: SortOrder
    filename?: SortOrder
    path?: SortOrder
    size?: SortOrder
    duration?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    orignalId?: SortOrder
  }

  export type VideoMinOrderByAggregateInput = {
    id?: SortOrder
    filename?: SortOrder
    path?: SortOrder
    size?: SortOrder
    duration?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    orignalId?: SortOrder
  }

  export type VideoSumOrderByAggregateInput = {
    size?: SortOrder
    duration?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type EnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumInstructionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.InstructionType | EnumInstructionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.InstructionType[] | ListEnumInstructionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.InstructionType[] | ListEnumInstructionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumInstructionTypeFilter<$PrismaModel> | $Enums.InstructionType
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type VideoScalarRelationFilter = {
    is?: VideoWhereInput
    isNot?: VideoWhereInput
  }

  export type InstructionCountOrderByAggregateInput = {
    id?: SortOrder
    videoId?: SortOrder
    type?: SortOrder
    params?: SortOrder
    sequence?: SortOrder
    createdAt?: SortOrder
  }

  export type InstructionAvgOrderByAggregateInput = {
    sequence?: SortOrder
  }

  export type InstructionMaxOrderByAggregateInput = {
    id?: SortOrder
    videoId?: SortOrder
    type?: SortOrder
    sequence?: SortOrder
    createdAt?: SortOrder
  }

  export type InstructionMinOrderByAggregateInput = {
    id?: SortOrder
    videoId?: SortOrder
    type?: SortOrder
    sequence?: SortOrder
    createdAt?: SortOrder
  }

  export type InstructionSumOrderByAggregateInput = {
    sequence?: SortOrder
  }

  export type EnumInstructionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.InstructionType | EnumInstructionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.InstructionType[] | ListEnumInstructionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.InstructionType[] | ListEnumInstructionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumInstructionTypeWithAggregatesFilter<$PrismaModel> | $Enums.InstructionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumInstructionTypeFilter<$PrismaModel>
    _max?: NestedEnumInstructionTypeFilter<$PrismaModel>
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type EnumJobStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.JobStatus | EnumJobStatusFieldRefInput<$PrismaModel>
    in?: $Enums.JobStatus[] | ListEnumJobStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.JobStatus[] | ListEnumJobStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumJobStatusFilter<$PrismaModel> | $Enums.JobStatus
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type RenderJobCountOrderByAggregateInput = {
    id?: SortOrder
    videoId?: SortOrder
    status?: SortOrder
    outputUrl?: SortOrder
    errorMessage?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RenderJobMaxOrderByAggregateInput = {
    id?: SortOrder
    videoId?: SortOrder
    status?: SortOrder
    outputUrl?: SortOrder
    errorMessage?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RenderJobMinOrderByAggregateInput = {
    id?: SortOrder
    videoId?: SortOrder
    status?: SortOrder
    outputUrl?: SortOrder
    errorMessage?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumJobStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.JobStatus | EnumJobStatusFieldRefInput<$PrismaModel>
    in?: $Enums.JobStatus[] | ListEnumJobStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.JobStatus[] | ListEnumJobStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumJobStatusWithAggregatesFilter<$PrismaModel> | $Enums.JobStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumJobStatusFilter<$PrismaModel>
    _max?: NestedEnumJobStatusFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type InstructionCreateNestedManyWithoutVideoInput = {
    create?: XOR<InstructionCreateWithoutVideoInput, InstructionUncheckedCreateWithoutVideoInput> | InstructionCreateWithoutVideoInput[] | InstructionUncheckedCreateWithoutVideoInput[]
    connectOrCreate?: InstructionCreateOrConnectWithoutVideoInput | InstructionCreateOrConnectWithoutVideoInput[]
    createMany?: InstructionCreateManyVideoInputEnvelope
    connect?: InstructionWhereUniqueInput | InstructionWhereUniqueInput[]
  }

  export type RenderJobCreateNestedManyWithoutVideoInput = {
    create?: XOR<RenderJobCreateWithoutVideoInput, RenderJobUncheckedCreateWithoutVideoInput> | RenderJobCreateWithoutVideoInput[] | RenderJobUncheckedCreateWithoutVideoInput[]
    connectOrCreate?: RenderJobCreateOrConnectWithoutVideoInput | RenderJobCreateOrConnectWithoutVideoInput[]
    createMany?: RenderJobCreateManyVideoInputEnvelope
    connect?: RenderJobWhereUniqueInput | RenderJobWhereUniqueInput[]
  }

  export type VideoCreateNestedOneWithoutCopiesInput = {
    create?: XOR<VideoCreateWithoutCopiesInput, VideoUncheckedCreateWithoutCopiesInput>
    connectOrCreate?: VideoCreateOrConnectWithoutCopiesInput
    connect?: VideoWhereUniqueInput
  }

  export type VideoCreateNestedManyWithoutOrignalInput = {
    create?: XOR<VideoCreateWithoutOrignalInput, VideoUncheckedCreateWithoutOrignalInput> | VideoCreateWithoutOrignalInput[] | VideoUncheckedCreateWithoutOrignalInput[]
    connectOrCreate?: VideoCreateOrConnectWithoutOrignalInput | VideoCreateOrConnectWithoutOrignalInput[]
    createMany?: VideoCreateManyOrignalInputEnvelope
    connect?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
  }

  export type InstructionUncheckedCreateNestedManyWithoutVideoInput = {
    create?: XOR<InstructionCreateWithoutVideoInput, InstructionUncheckedCreateWithoutVideoInput> | InstructionCreateWithoutVideoInput[] | InstructionUncheckedCreateWithoutVideoInput[]
    connectOrCreate?: InstructionCreateOrConnectWithoutVideoInput | InstructionCreateOrConnectWithoutVideoInput[]
    createMany?: InstructionCreateManyVideoInputEnvelope
    connect?: InstructionWhereUniqueInput | InstructionWhereUniqueInput[]
  }

  export type RenderJobUncheckedCreateNestedManyWithoutVideoInput = {
    create?: XOR<RenderJobCreateWithoutVideoInput, RenderJobUncheckedCreateWithoutVideoInput> | RenderJobCreateWithoutVideoInput[] | RenderJobUncheckedCreateWithoutVideoInput[]
    connectOrCreate?: RenderJobCreateOrConnectWithoutVideoInput | RenderJobCreateOrConnectWithoutVideoInput[]
    createMany?: RenderJobCreateManyVideoInputEnvelope
    connect?: RenderJobWhereUniqueInput | RenderJobWhereUniqueInput[]
  }

  export type VideoUncheckedCreateNestedManyWithoutOrignalInput = {
    create?: XOR<VideoCreateWithoutOrignalInput, VideoUncheckedCreateWithoutOrignalInput> | VideoCreateWithoutOrignalInput[] | VideoUncheckedCreateWithoutOrignalInput[]
    connectOrCreate?: VideoCreateOrConnectWithoutOrignalInput | VideoCreateOrConnectWithoutOrignalInput[]
    createMany?: VideoCreateManyOrignalInputEnvelope
    connect?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumStatusFieldUpdateOperationsInput = {
    set?: $Enums.Status
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type InstructionUpdateManyWithoutVideoNestedInput = {
    create?: XOR<InstructionCreateWithoutVideoInput, InstructionUncheckedCreateWithoutVideoInput> | InstructionCreateWithoutVideoInput[] | InstructionUncheckedCreateWithoutVideoInput[]
    connectOrCreate?: InstructionCreateOrConnectWithoutVideoInput | InstructionCreateOrConnectWithoutVideoInput[]
    upsert?: InstructionUpsertWithWhereUniqueWithoutVideoInput | InstructionUpsertWithWhereUniqueWithoutVideoInput[]
    createMany?: InstructionCreateManyVideoInputEnvelope
    set?: InstructionWhereUniqueInput | InstructionWhereUniqueInput[]
    disconnect?: InstructionWhereUniqueInput | InstructionWhereUniqueInput[]
    delete?: InstructionWhereUniqueInput | InstructionWhereUniqueInput[]
    connect?: InstructionWhereUniqueInput | InstructionWhereUniqueInput[]
    update?: InstructionUpdateWithWhereUniqueWithoutVideoInput | InstructionUpdateWithWhereUniqueWithoutVideoInput[]
    updateMany?: InstructionUpdateManyWithWhereWithoutVideoInput | InstructionUpdateManyWithWhereWithoutVideoInput[]
    deleteMany?: InstructionScalarWhereInput | InstructionScalarWhereInput[]
  }

  export type RenderJobUpdateManyWithoutVideoNestedInput = {
    create?: XOR<RenderJobCreateWithoutVideoInput, RenderJobUncheckedCreateWithoutVideoInput> | RenderJobCreateWithoutVideoInput[] | RenderJobUncheckedCreateWithoutVideoInput[]
    connectOrCreate?: RenderJobCreateOrConnectWithoutVideoInput | RenderJobCreateOrConnectWithoutVideoInput[]
    upsert?: RenderJobUpsertWithWhereUniqueWithoutVideoInput | RenderJobUpsertWithWhereUniqueWithoutVideoInput[]
    createMany?: RenderJobCreateManyVideoInputEnvelope
    set?: RenderJobWhereUniqueInput | RenderJobWhereUniqueInput[]
    disconnect?: RenderJobWhereUniqueInput | RenderJobWhereUniqueInput[]
    delete?: RenderJobWhereUniqueInput | RenderJobWhereUniqueInput[]
    connect?: RenderJobWhereUniqueInput | RenderJobWhereUniqueInput[]
    update?: RenderJobUpdateWithWhereUniqueWithoutVideoInput | RenderJobUpdateWithWhereUniqueWithoutVideoInput[]
    updateMany?: RenderJobUpdateManyWithWhereWithoutVideoInput | RenderJobUpdateManyWithWhereWithoutVideoInput[]
    deleteMany?: RenderJobScalarWhereInput | RenderJobScalarWhereInput[]
  }

  export type VideoUpdateOneWithoutCopiesNestedInput = {
    create?: XOR<VideoCreateWithoutCopiesInput, VideoUncheckedCreateWithoutCopiesInput>
    connectOrCreate?: VideoCreateOrConnectWithoutCopiesInput
    upsert?: VideoUpsertWithoutCopiesInput
    disconnect?: VideoWhereInput | boolean
    delete?: VideoWhereInput | boolean
    connect?: VideoWhereUniqueInput
    update?: XOR<XOR<VideoUpdateToOneWithWhereWithoutCopiesInput, VideoUpdateWithoutCopiesInput>, VideoUncheckedUpdateWithoutCopiesInput>
  }

  export type VideoUpdateManyWithoutOrignalNestedInput = {
    create?: XOR<VideoCreateWithoutOrignalInput, VideoUncheckedCreateWithoutOrignalInput> | VideoCreateWithoutOrignalInput[] | VideoUncheckedCreateWithoutOrignalInput[]
    connectOrCreate?: VideoCreateOrConnectWithoutOrignalInput | VideoCreateOrConnectWithoutOrignalInput[]
    upsert?: VideoUpsertWithWhereUniqueWithoutOrignalInput | VideoUpsertWithWhereUniqueWithoutOrignalInput[]
    createMany?: VideoCreateManyOrignalInputEnvelope
    set?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    disconnect?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    delete?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    connect?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    update?: VideoUpdateWithWhereUniqueWithoutOrignalInput | VideoUpdateWithWhereUniqueWithoutOrignalInput[]
    updateMany?: VideoUpdateManyWithWhereWithoutOrignalInput | VideoUpdateManyWithWhereWithoutOrignalInput[]
    deleteMany?: VideoScalarWhereInput | VideoScalarWhereInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type InstructionUncheckedUpdateManyWithoutVideoNestedInput = {
    create?: XOR<InstructionCreateWithoutVideoInput, InstructionUncheckedCreateWithoutVideoInput> | InstructionCreateWithoutVideoInput[] | InstructionUncheckedCreateWithoutVideoInput[]
    connectOrCreate?: InstructionCreateOrConnectWithoutVideoInput | InstructionCreateOrConnectWithoutVideoInput[]
    upsert?: InstructionUpsertWithWhereUniqueWithoutVideoInput | InstructionUpsertWithWhereUniqueWithoutVideoInput[]
    createMany?: InstructionCreateManyVideoInputEnvelope
    set?: InstructionWhereUniqueInput | InstructionWhereUniqueInput[]
    disconnect?: InstructionWhereUniqueInput | InstructionWhereUniqueInput[]
    delete?: InstructionWhereUniqueInput | InstructionWhereUniqueInput[]
    connect?: InstructionWhereUniqueInput | InstructionWhereUniqueInput[]
    update?: InstructionUpdateWithWhereUniqueWithoutVideoInput | InstructionUpdateWithWhereUniqueWithoutVideoInput[]
    updateMany?: InstructionUpdateManyWithWhereWithoutVideoInput | InstructionUpdateManyWithWhereWithoutVideoInput[]
    deleteMany?: InstructionScalarWhereInput | InstructionScalarWhereInput[]
  }

  export type RenderJobUncheckedUpdateManyWithoutVideoNestedInput = {
    create?: XOR<RenderJobCreateWithoutVideoInput, RenderJobUncheckedCreateWithoutVideoInput> | RenderJobCreateWithoutVideoInput[] | RenderJobUncheckedCreateWithoutVideoInput[]
    connectOrCreate?: RenderJobCreateOrConnectWithoutVideoInput | RenderJobCreateOrConnectWithoutVideoInput[]
    upsert?: RenderJobUpsertWithWhereUniqueWithoutVideoInput | RenderJobUpsertWithWhereUniqueWithoutVideoInput[]
    createMany?: RenderJobCreateManyVideoInputEnvelope
    set?: RenderJobWhereUniqueInput | RenderJobWhereUniqueInput[]
    disconnect?: RenderJobWhereUniqueInput | RenderJobWhereUniqueInput[]
    delete?: RenderJobWhereUniqueInput | RenderJobWhereUniqueInput[]
    connect?: RenderJobWhereUniqueInput | RenderJobWhereUniqueInput[]
    update?: RenderJobUpdateWithWhereUniqueWithoutVideoInput | RenderJobUpdateWithWhereUniqueWithoutVideoInput[]
    updateMany?: RenderJobUpdateManyWithWhereWithoutVideoInput | RenderJobUpdateManyWithWhereWithoutVideoInput[]
    deleteMany?: RenderJobScalarWhereInput | RenderJobScalarWhereInput[]
  }

  export type VideoUncheckedUpdateManyWithoutOrignalNestedInput = {
    create?: XOR<VideoCreateWithoutOrignalInput, VideoUncheckedCreateWithoutOrignalInput> | VideoCreateWithoutOrignalInput[] | VideoUncheckedCreateWithoutOrignalInput[]
    connectOrCreate?: VideoCreateOrConnectWithoutOrignalInput | VideoCreateOrConnectWithoutOrignalInput[]
    upsert?: VideoUpsertWithWhereUniqueWithoutOrignalInput | VideoUpsertWithWhereUniqueWithoutOrignalInput[]
    createMany?: VideoCreateManyOrignalInputEnvelope
    set?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    disconnect?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    delete?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    connect?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    update?: VideoUpdateWithWhereUniqueWithoutOrignalInput | VideoUpdateWithWhereUniqueWithoutOrignalInput[]
    updateMany?: VideoUpdateManyWithWhereWithoutOrignalInput | VideoUpdateManyWithWhereWithoutOrignalInput[]
    deleteMany?: VideoScalarWhereInput | VideoScalarWhereInput[]
  }

  export type VideoCreateNestedOneWithoutInstructionsInput = {
    create?: XOR<VideoCreateWithoutInstructionsInput, VideoUncheckedCreateWithoutInstructionsInput>
    connectOrCreate?: VideoCreateOrConnectWithoutInstructionsInput
    connect?: VideoWhereUniqueInput
  }

  export type EnumInstructionTypeFieldUpdateOperationsInput = {
    set?: $Enums.InstructionType
  }

  export type VideoUpdateOneRequiredWithoutInstructionsNestedInput = {
    create?: XOR<VideoCreateWithoutInstructionsInput, VideoUncheckedCreateWithoutInstructionsInput>
    connectOrCreate?: VideoCreateOrConnectWithoutInstructionsInput
    upsert?: VideoUpsertWithoutInstructionsInput
    connect?: VideoWhereUniqueInput
    update?: XOR<XOR<VideoUpdateToOneWithWhereWithoutInstructionsInput, VideoUpdateWithoutInstructionsInput>, VideoUncheckedUpdateWithoutInstructionsInput>
  }

  export type VideoCreateNestedOneWithoutRenderJobsInput = {
    create?: XOR<VideoCreateWithoutRenderJobsInput, VideoUncheckedCreateWithoutRenderJobsInput>
    connectOrCreate?: VideoCreateOrConnectWithoutRenderJobsInput
    connect?: VideoWhereUniqueInput
  }

  export type EnumJobStatusFieldUpdateOperationsInput = {
    set?: $Enums.JobStatus
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type VideoUpdateOneRequiredWithoutRenderJobsNestedInput = {
    create?: XOR<VideoCreateWithoutRenderJobsInput, VideoUncheckedCreateWithoutRenderJobsInput>
    connectOrCreate?: VideoCreateOrConnectWithoutRenderJobsInput
    upsert?: VideoUpsertWithoutRenderJobsInput
    connect?: VideoWhereUniqueInput
    update?: XOR<XOR<VideoUpdateToOneWithWhereWithoutRenderJobsInput, VideoUpdateWithoutRenderJobsInput>, VideoUncheckedUpdateWithoutRenderJobsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedEnumInstructionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.InstructionType | EnumInstructionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.InstructionType[] | ListEnumInstructionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.InstructionType[] | ListEnumInstructionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumInstructionTypeFilter<$PrismaModel> | $Enums.InstructionType
  }

  export type NestedEnumInstructionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.InstructionType | EnumInstructionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.InstructionType[] | ListEnumInstructionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.InstructionType[] | ListEnumInstructionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumInstructionTypeWithAggregatesFilter<$PrismaModel> | $Enums.InstructionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumInstructionTypeFilter<$PrismaModel>
    _max?: NestedEnumInstructionTypeFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedEnumJobStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.JobStatus | EnumJobStatusFieldRefInput<$PrismaModel>
    in?: $Enums.JobStatus[] | ListEnumJobStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.JobStatus[] | ListEnumJobStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumJobStatusFilter<$PrismaModel> | $Enums.JobStatus
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumJobStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.JobStatus | EnumJobStatusFieldRefInput<$PrismaModel>
    in?: $Enums.JobStatus[] | ListEnumJobStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.JobStatus[] | ListEnumJobStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumJobStatusWithAggregatesFilter<$PrismaModel> | $Enums.JobStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumJobStatusFilter<$PrismaModel>
    _max?: NestedEnumJobStatusFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type InstructionCreateWithoutVideoInput = {
    id?: string
    type: $Enums.InstructionType
    params: JsonNullValueInput | InputJsonValue
    sequence: number
    createdAt?: Date | string
  }

  export type InstructionUncheckedCreateWithoutVideoInput = {
    id?: string
    type: $Enums.InstructionType
    params: JsonNullValueInput | InputJsonValue
    sequence: number
    createdAt?: Date | string
  }

  export type InstructionCreateOrConnectWithoutVideoInput = {
    where: InstructionWhereUniqueInput
    create: XOR<InstructionCreateWithoutVideoInput, InstructionUncheckedCreateWithoutVideoInput>
  }

  export type InstructionCreateManyVideoInputEnvelope = {
    data: InstructionCreateManyVideoInput | InstructionCreateManyVideoInput[]
    skipDuplicates?: boolean
  }

  export type RenderJobCreateWithoutVideoInput = {
    id?: string
    status: $Enums.JobStatus
    outputUrl?: string | null
    errorMessage?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RenderJobUncheckedCreateWithoutVideoInput = {
    id?: string
    status: $Enums.JobStatus
    outputUrl?: string | null
    errorMessage?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RenderJobCreateOrConnectWithoutVideoInput = {
    where: RenderJobWhereUniqueInput
    create: XOR<RenderJobCreateWithoutVideoInput, RenderJobUncheckedCreateWithoutVideoInput>
  }

  export type RenderJobCreateManyVideoInputEnvelope = {
    data: RenderJobCreateManyVideoInput | RenderJobCreateManyVideoInput[]
    skipDuplicates?: boolean
  }

  export type VideoCreateWithoutCopiesInput = {
    id?: string
    filename: string
    path: string
    size: number
    duration?: number | null
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    instructions?: InstructionCreateNestedManyWithoutVideoInput
    renderJobs?: RenderJobCreateNestedManyWithoutVideoInput
    orignal?: VideoCreateNestedOneWithoutCopiesInput
  }

  export type VideoUncheckedCreateWithoutCopiesInput = {
    id?: string
    filename: string
    path: string
    size: number
    duration?: number | null
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    orignalId?: string | null
    instructions?: InstructionUncheckedCreateNestedManyWithoutVideoInput
    renderJobs?: RenderJobUncheckedCreateNestedManyWithoutVideoInput
  }

  export type VideoCreateOrConnectWithoutCopiesInput = {
    where: VideoWhereUniqueInput
    create: XOR<VideoCreateWithoutCopiesInput, VideoUncheckedCreateWithoutCopiesInput>
  }

  export type VideoCreateWithoutOrignalInput = {
    id?: string
    filename: string
    path: string
    size: number
    duration?: number | null
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    instructions?: InstructionCreateNestedManyWithoutVideoInput
    renderJobs?: RenderJobCreateNestedManyWithoutVideoInput
    copies?: VideoCreateNestedManyWithoutOrignalInput
  }

  export type VideoUncheckedCreateWithoutOrignalInput = {
    id?: string
    filename: string
    path: string
    size: number
    duration?: number | null
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    instructions?: InstructionUncheckedCreateNestedManyWithoutVideoInput
    renderJobs?: RenderJobUncheckedCreateNestedManyWithoutVideoInput
    copies?: VideoUncheckedCreateNestedManyWithoutOrignalInput
  }

  export type VideoCreateOrConnectWithoutOrignalInput = {
    where: VideoWhereUniqueInput
    create: XOR<VideoCreateWithoutOrignalInput, VideoUncheckedCreateWithoutOrignalInput>
  }

  export type VideoCreateManyOrignalInputEnvelope = {
    data: VideoCreateManyOrignalInput | VideoCreateManyOrignalInput[]
    skipDuplicates?: boolean
  }

  export type InstructionUpsertWithWhereUniqueWithoutVideoInput = {
    where: InstructionWhereUniqueInput
    update: XOR<InstructionUpdateWithoutVideoInput, InstructionUncheckedUpdateWithoutVideoInput>
    create: XOR<InstructionCreateWithoutVideoInput, InstructionUncheckedCreateWithoutVideoInput>
  }

  export type InstructionUpdateWithWhereUniqueWithoutVideoInput = {
    where: InstructionWhereUniqueInput
    data: XOR<InstructionUpdateWithoutVideoInput, InstructionUncheckedUpdateWithoutVideoInput>
  }

  export type InstructionUpdateManyWithWhereWithoutVideoInput = {
    where: InstructionScalarWhereInput
    data: XOR<InstructionUpdateManyMutationInput, InstructionUncheckedUpdateManyWithoutVideoInput>
  }

  export type InstructionScalarWhereInput = {
    AND?: InstructionScalarWhereInput | InstructionScalarWhereInput[]
    OR?: InstructionScalarWhereInput[]
    NOT?: InstructionScalarWhereInput | InstructionScalarWhereInput[]
    id?: StringFilter<"Instruction"> | string
    videoId?: StringFilter<"Instruction"> | string
    type?: EnumInstructionTypeFilter<"Instruction"> | $Enums.InstructionType
    params?: JsonFilter<"Instruction">
    sequence?: IntFilter<"Instruction"> | number
    createdAt?: DateTimeFilter<"Instruction"> | Date | string
  }

  export type RenderJobUpsertWithWhereUniqueWithoutVideoInput = {
    where: RenderJobWhereUniqueInput
    update: XOR<RenderJobUpdateWithoutVideoInput, RenderJobUncheckedUpdateWithoutVideoInput>
    create: XOR<RenderJobCreateWithoutVideoInput, RenderJobUncheckedCreateWithoutVideoInput>
  }

  export type RenderJobUpdateWithWhereUniqueWithoutVideoInput = {
    where: RenderJobWhereUniqueInput
    data: XOR<RenderJobUpdateWithoutVideoInput, RenderJobUncheckedUpdateWithoutVideoInput>
  }

  export type RenderJobUpdateManyWithWhereWithoutVideoInput = {
    where: RenderJobScalarWhereInput
    data: XOR<RenderJobUpdateManyMutationInput, RenderJobUncheckedUpdateManyWithoutVideoInput>
  }

  export type RenderJobScalarWhereInput = {
    AND?: RenderJobScalarWhereInput | RenderJobScalarWhereInput[]
    OR?: RenderJobScalarWhereInput[]
    NOT?: RenderJobScalarWhereInput | RenderJobScalarWhereInput[]
    id?: StringFilter<"RenderJob"> | string
    videoId?: StringFilter<"RenderJob"> | string
    status?: EnumJobStatusFilter<"RenderJob"> | $Enums.JobStatus
    outputUrl?: StringNullableFilter<"RenderJob"> | string | null
    errorMessage?: StringNullableFilter<"RenderJob"> | string | null
    isActive?: BoolFilter<"RenderJob"> | boolean
    createdAt?: DateTimeFilter<"RenderJob"> | Date | string
    updatedAt?: DateTimeFilter<"RenderJob"> | Date | string
  }

  export type VideoUpsertWithoutCopiesInput = {
    update: XOR<VideoUpdateWithoutCopiesInput, VideoUncheckedUpdateWithoutCopiesInput>
    create: XOR<VideoCreateWithoutCopiesInput, VideoUncheckedCreateWithoutCopiesInput>
    where?: VideoWhereInput
  }

  export type VideoUpdateToOneWithWhereWithoutCopiesInput = {
    where?: VideoWhereInput
    data: XOR<VideoUpdateWithoutCopiesInput, VideoUncheckedUpdateWithoutCopiesInput>
  }

  export type VideoUpdateWithoutCopiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    duration?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    instructions?: InstructionUpdateManyWithoutVideoNestedInput
    renderJobs?: RenderJobUpdateManyWithoutVideoNestedInput
    orignal?: VideoUpdateOneWithoutCopiesNestedInput
  }

  export type VideoUncheckedUpdateWithoutCopiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    duration?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orignalId?: NullableStringFieldUpdateOperationsInput | string | null
    instructions?: InstructionUncheckedUpdateManyWithoutVideoNestedInput
    renderJobs?: RenderJobUncheckedUpdateManyWithoutVideoNestedInput
  }

  export type VideoUpsertWithWhereUniqueWithoutOrignalInput = {
    where: VideoWhereUniqueInput
    update: XOR<VideoUpdateWithoutOrignalInput, VideoUncheckedUpdateWithoutOrignalInput>
    create: XOR<VideoCreateWithoutOrignalInput, VideoUncheckedCreateWithoutOrignalInput>
  }

  export type VideoUpdateWithWhereUniqueWithoutOrignalInput = {
    where: VideoWhereUniqueInput
    data: XOR<VideoUpdateWithoutOrignalInput, VideoUncheckedUpdateWithoutOrignalInput>
  }

  export type VideoUpdateManyWithWhereWithoutOrignalInput = {
    where: VideoScalarWhereInput
    data: XOR<VideoUpdateManyMutationInput, VideoUncheckedUpdateManyWithoutOrignalInput>
  }

  export type VideoScalarWhereInput = {
    AND?: VideoScalarWhereInput | VideoScalarWhereInput[]
    OR?: VideoScalarWhereInput[]
    NOT?: VideoScalarWhereInput | VideoScalarWhereInput[]
    id?: StringFilter<"Video"> | string
    filename?: StringFilter<"Video"> | string
    path?: StringFilter<"Video"> | string
    size?: IntFilter<"Video"> | number
    duration?: FloatNullableFilter<"Video"> | number | null
    status?: EnumStatusFilter<"Video"> | $Enums.Status
    createdAt?: DateTimeFilter<"Video"> | Date | string
    updatedAt?: DateTimeFilter<"Video"> | Date | string
    orignalId?: StringNullableFilter<"Video"> | string | null
  }

  export type VideoCreateWithoutInstructionsInput = {
    id?: string
    filename: string
    path: string
    size: number
    duration?: number | null
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    renderJobs?: RenderJobCreateNestedManyWithoutVideoInput
    orignal?: VideoCreateNestedOneWithoutCopiesInput
    copies?: VideoCreateNestedManyWithoutOrignalInput
  }

  export type VideoUncheckedCreateWithoutInstructionsInput = {
    id?: string
    filename: string
    path: string
    size: number
    duration?: number | null
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    orignalId?: string | null
    renderJobs?: RenderJobUncheckedCreateNestedManyWithoutVideoInput
    copies?: VideoUncheckedCreateNestedManyWithoutOrignalInput
  }

  export type VideoCreateOrConnectWithoutInstructionsInput = {
    where: VideoWhereUniqueInput
    create: XOR<VideoCreateWithoutInstructionsInput, VideoUncheckedCreateWithoutInstructionsInput>
  }

  export type VideoUpsertWithoutInstructionsInput = {
    update: XOR<VideoUpdateWithoutInstructionsInput, VideoUncheckedUpdateWithoutInstructionsInput>
    create: XOR<VideoCreateWithoutInstructionsInput, VideoUncheckedCreateWithoutInstructionsInput>
    where?: VideoWhereInput
  }

  export type VideoUpdateToOneWithWhereWithoutInstructionsInput = {
    where?: VideoWhereInput
    data: XOR<VideoUpdateWithoutInstructionsInput, VideoUncheckedUpdateWithoutInstructionsInput>
  }

  export type VideoUpdateWithoutInstructionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    duration?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    renderJobs?: RenderJobUpdateManyWithoutVideoNestedInput
    orignal?: VideoUpdateOneWithoutCopiesNestedInput
    copies?: VideoUpdateManyWithoutOrignalNestedInput
  }

  export type VideoUncheckedUpdateWithoutInstructionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    duration?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orignalId?: NullableStringFieldUpdateOperationsInput | string | null
    renderJobs?: RenderJobUncheckedUpdateManyWithoutVideoNestedInput
    copies?: VideoUncheckedUpdateManyWithoutOrignalNestedInput
  }

  export type VideoCreateWithoutRenderJobsInput = {
    id?: string
    filename: string
    path: string
    size: number
    duration?: number | null
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    instructions?: InstructionCreateNestedManyWithoutVideoInput
    orignal?: VideoCreateNestedOneWithoutCopiesInput
    copies?: VideoCreateNestedManyWithoutOrignalInput
  }

  export type VideoUncheckedCreateWithoutRenderJobsInput = {
    id?: string
    filename: string
    path: string
    size: number
    duration?: number | null
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    orignalId?: string | null
    instructions?: InstructionUncheckedCreateNestedManyWithoutVideoInput
    copies?: VideoUncheckedCreateNestedManyWithoutOrignalInput
  }

  export type VideoCreateOrConnectWithoutRenderJobsInput = {
    where: VideoWhereUniqueInput
    create: XOR<VideoCreateWithoutRenderJobsInput, VideoUncheckedCreateWithoutRenderJobsInput>
  }

  export type VideoUpsertWithoutRenderJobsInput = {
    update: XOR<VideoUpdateWithoutRenderJobsInput, VideoUncheckedUpdateWithoutRenderJobsInput>
    create: XOR<VideoCreateWithoutRenderJobsInput, VideoUncheckedCreateWithoutRenderJobsInput>
    where?: VideoWhereInput
  }

  export type VideoUpdateToOneWithWhereWithoutRenderJobsInput = {
    where?: VideoWhereInput
    data: XOR<VideoUpdateWithoutRenderJobsInput, VideoUncheckedUpdateWithoutRenderJobsInput>
  }

  export type VideoUpdateWithoutRenderJobsInput = {
    id?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    duration?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    instructions?: InstructionUpdateManyWithoutVideoNestedInput
    orignal?: VideoUpdateOneWithoutCopiesNestedInput
    copies?: VideoUpdateManyWithoutOrignalNestedInput
  }

  export type VideoUncheckedUpdateWithoutRenderJobsInput = {
    id?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    duration?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orignalId?: NullableStringFieldUpdateOperationsInput | string | null
    instructions?: InstructionUncheckedUpdateManyWithoutVideoNestedInput
    copies?: VideoUncheckedUpdateManyWithoutOrignalNestedInput
  }

  export type InstructionCreateManyVideoInput = {
    id?: string
    type: $Enums.InstructionType
    params: JsonNullValueInput | InputJsonValue
    sequence: number
    createdAt?: Date | string
  }

  export type RenderJobCreateManyVideoInput = {
    id?: string
    status: $Enums.JobStatus
    outputUrl?: string | null
    errorMessage?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VideoCreateManyOrignalInput = {
    id?: string
    filename: string
    path: string
    size: number
    duration?: number | null
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InstructionUpdateWithoutVideoInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumInstructionTypeFieldUpdateOperationsInput | $Enums.InstructionType
    params?: JsonNullValueInput | InputJsonValue
    sequence?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InstructionUncheckedUpdateWithoutVideoInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumInstructionTypeFieldUpdateOperationsInput | $Enums.InstructionType
    params?: JsonNullValueInput | InputJsonValue
    sequence?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InstructionUncheckedUpdateManyWithoutVideoInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumInstructionTypeFieldUpdateOperationsInput | $Enums.InstructionType
    params?: JsonNullValueInput | InputJsonValue
    sequence?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RenderJobUpdateWithoutVideoInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    outputUrl?: NullableStringFieldUpdateOperationsInput | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RenderJobUncheckedUpdateWithoutVideoInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    outputUrl?: NullableStringFieldUpdateOperationsInput | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RenderJobUncheckedUpdateManyWithoutVideoInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    outputUrl?: NullableStringFieldUpdateOperationsInput | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VideoUpdateWithoutOrignalInput = {
    id?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    duration?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    instructions?: InstructionUpdateManyWithoutVideoNestedInput
    renderJobs?: RenderJobUpdateManyWithoutVideoNestedInput
    copies?: VideoUpdateManyWithoutOrignalNestedInput
  }

  export type VideoUncheckedUpdateWithoutOrignalInput = {
    id?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    duration?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    instructions?: InstructionUncheckedUpdateManyWithoutVideoNestedInput
    renderJobs?: RenderJobUncheckedUpdateManyWithoutVideoNestedInput
    copies?: VideoUncheckedUpdateManyWithoutOrignalNestedInput
  }

  export type VideoUncheckedUpdateManyWithoutOrignalInput = {
    id?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    duration?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}