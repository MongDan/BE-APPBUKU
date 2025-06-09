
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Buku
 * 
 */
export type Buku = $Result.DefaultSelection<Prisma.$BukuPayload>
/**
 * Model Kategori
 * 
 */
export type Kategori = $Result.DefaultSelection<Prisma.$KategoriPayload>
/**
 * Model EksemplarBuku
 * 
 */
export type EksemplarBuku = $Result.DefaultSelection<Prisma.$EksemplarBukuPayload>
/**
 * Model Peminjaman
 * 
 */
export type Peminjaman = $Result.DefaultSelection<Prisma.$PeminjamanPayload>
/**
 * Model BukuKategori
 * 
 */
export type BukuKategori = $Result.DefaultSelection<Prisma.$BukuKategoriPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  USER: 'USER',
  ADMIN: 'ADMIN'
};

export type Role = (typeof Role)[keyof typeof Role]


export const Status: {
  TERSEDIA: 'TERSEDIA',
  DIPINJAM: 'DIPINJAM',
  PENDING: 'PENDING',
  DITOLAK: 'DITOLAK',
  PENDING_KEMBALI: 'PENDING_KEMBALI',
  SELESAI: 'SELESAI',
  DIARSIPKAN: 'DIARSIPKAN'
};

export type Status = (typeof Status)[keyof typeof Status]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type Status = $Enums.Status

export const Status: typeof $Enums.Status

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.buku`: Exposes CRUD operations for the **Buku** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bukus
    * const bukus = await prisma.buku.findMany()
    * ```
    */
  get buku(): Prisma.BukuDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.kategori`: Exposes CRUD operations for the **Kategori** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Kategoris
    * const kategoris = await prisma.kategori.findMany()
    * ```
    */
  get kategori(): Prisma.KategoriDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.eksemplarBuku`: Exposes CRUD operations for the **EksemplarBuku** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EksemplarBukus
    * const eksemplarBukus = await prisma.eksemplarBuku.findMany()
    * ```
    */
  get eksemplarBuku(): Prisma.EksemplarBukuDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.peminjaman`: Exposes CRUD operations for the **Peminjaman** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Peminjamen
    * const peminjamen = await prisma.peminjaman.findMany()
    * ```
    */
  get peminjaman(): Prisma.PeminjamanDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bukuKategori`: Exposes CRUD operations for the **BukuKategori** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BukuKategoris
    * const bukuKategoris = await prisma.bukuKategori.findMany()
    * ```
    */
  get bukuKategori(): Prisma.BukuKategoriDelegate<ExtArgs, ClientOptions>;
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
    User: 'User',
    Buku: 'Buku',
    Kategori: 'Kategori',
    EksemplarBuku: 'EksemplarBuku',
    Peminjaman: 'Peminjaman',
    BukuKategori: 'BukuKategori'
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
      modelProps: "user" | "buku" | "kategori" | "eksemplarBuku" | "peminjaman" | "bukuKategori"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Buku: {
        payload: Prisma.$BukuPayload<ExtArgs>
        fields: Prisma.BukuFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BukuFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BukuPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BukuFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BukuPayload>
          }
          findFirst: {
            args: Prisma.BukuFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BukuPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BukuFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BukuPayload>
          }
          findMany: {
            args: Prisma.BukuFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BukuPayload>[]
          }
          create: {
            args: Prisma.BukuCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BukuPayload>
          }
          createMany: {
            args: Prisma.BukuCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BukuCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BukuPayload>[]
          }
          delete: {
            args: Prisma.BukuDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BukuPayload>
          }
          update: {
            args: Prisma.BukuUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BukuPayload>
          }
          deleteMany: {
            args: Prisma.BukuDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BukuUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BukuUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BukuPayload>[]
          }
          upsert: {
            args: Prisma.BukuUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BukuPayload>
          }
          aggregate: {
            args: Prisma.BukuAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBuku>
          }
          groupBy: {
            args: Prisma.BukuGroupByArgs<ExtArgs>
            result: $Utils.Optional<BukuGroupByOutputType>[]
          }
          count: {
            args: Prisma.BukuCountArgs<ExtArgs>
            result: $Utils.Optional<BukuCountAggregateOutputType> | number
          }
        }
      }
      Kategori: {
        payload: Prisma.$KategoriPayload<ExtArgs>
        fields: Prisma.KategoriFieldRefs
        operations: {
          findUnique: {
            args: Prisma.KategoriFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KategoriPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.KategoriFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KategoriPayload>
          }
          findFirst: {
            args: Prisma.KategoriFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KategoriPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.KategoriFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KategoriPayload>
          }
          findMany: {
            args: Prisma.KategoriFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KategoriPayload>[]
          }
          create: {
            args: Prisma.KategoriCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KategoriPayload>
          }
          createMany: {
            args: Prisma.KategoriCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.KategoriCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KategoriPayload>[]
          }
          delete: {
            args: Prisma.KategoriDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KategoriPayload>
          }
          update: {
            args: Prisma.KategoriUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KategoriPayload>
          }
          deleteMany: {
            args: Prisma.KategoriDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.KategoriUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.KategoriUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KategoriPayload>[]
          }
          upsert: {
            args: Prisma.KategoriUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KategoriPayload>
          }
          aggregate: {
            args: Prisma.KategoriAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateKategori>
          }
          groupBy: {
            args: Prisma.KategoriGroupByArgs<ExtArgs>
            result: $Utils.Optional<KategoriGroupByOutputType>[]
          }
          count: {
            args: Prisma.KategoriCountArgs<ExtArgs>
            result: $Utils.Optional<KategoriCountAggregateOutputType> | number
          }
        }
      }
      EksemplarBuku: {
        payload: Prisma.$EksemplarBukuPayload<ExtArgs>
        fields: Prisma.EksemplarBukuFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EksemplarBukuFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EksemplarBukuPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EksemplarBukuFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EksemplarBukuPayload>
          }
          findFirst: {
            args: Prisma.EksemplarBukuFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EksemplarBukuPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EksemplarBukuFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EksemplarBukuPayload>
          }
          findMany: {
            args: Prisma.EksemplarBukuFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EksemplarBukuPayload>[]
          }
          create: {
            args: Prisma.EksemplarBukuCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EksemplarBukuPayload>
          }
          createMany: {
            args: Prisma.EksemplarBukuCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EksemplarBukuCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EksemplarBukuPayload>[]
          }
          delete: {
            args: Prisma.EksemplarBukuDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EksemplarBukuPayload>
          }
          update: {
            args: Prisma.EksemplarBukuUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EksemplarBukuPayload>
          }
          deleteMany: {
            args: Prisma.EksemplarBukuDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EksemplarBukuUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EksemplarBukuUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EksemplarBukuPayload>[]
          }
          upsert: {
            args: Prisma.EksemplarBukuUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EksemplarBukuPayload>
          }
          aggregate: {
            args: Prisma.EksemplarBukuAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEksemplarBuku>
          }
          groupBy: {
            args: Prisma.EksemplarBukuGroupByArgs<ExtArgs>
            result: $Utils.Optional<EksemplarBukuGroupByOutputType>[]
          }
          count: {
            args: Prisma.EksemplarBukuCountArgs<ExtArgs>
            result: $Utils.Optional<EksemplarBukuCountAggregateOutputType> | number
          }
        }
      }
      Peminjaman: {
        payload: Prisma.$PeminjamanPayload<ExtArgs>
        fields: Prisma.PeminjamanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PeminjamanFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeminjamanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PeminjamanFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeminjamanPayload>
          }
          findFirst: {
            args: Prisma.PeminjamanFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeminjamanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PeminjamanFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeminjamanPayload>
          }
          findMany: {
            args: Prisma.PeminjamanFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeminjamanPayload>[]
          }
          create: {
            args: Prisma.PeminjamanCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeminjamanPayload>
          }
          createMany: {
            args: Prisma.PeminjamanCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PeminjamanCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeminjamanPayload>[]
          }
          delete: {
            args: Prisma.PeminjamanDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeminjamanPayload>
          }
          update: {
            args: Prisma.PeminjamanUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeminjamanPayload>
          }
          deleteMany: {
            args: Prisma.PeminjamanDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PeminjamanUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PeminjamanUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeminjamanPayload>[]
          }
          upsert: {
            args: Prisma.PeminjamanUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeminjamanPayload>
          }
          aggregate: {
            args: Prisma.PeminjamanAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePeminjaman>
          }
          groupBy: {
            args: Prisma.PeminjamanGroupByArgs<ExtArgs>
            result: $Utils.Optional<PeminjamanGroupByOutputType>[]
          }
          count: {
            args: Prisma.PeminjamanCountArgs<ExtArgs>
            result: $Utils.Optional<PeminjamanCountAggregateOutputType> | number
          }
        }
      }
      BukuKategori: {
        payload: Prisma.$BukuKategoriPayload<ExtArgs>
        fields: Prisma.BukuKategoriFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BukuKategoriFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BukuKategoriPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BukuKategoriFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BukuKategoriPayload>
          }
          findFirst: {
            args: Prisma.BukuKategoriFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BukuKategoriPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BukuKategoriFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BukuKategoriPayload>
          }
          findMany: {
            args: Prisma.BukuKategoriFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BukuKategoriPayload>[]
          }
          create: {
            args: Prisma.BukuKategoriCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BukuKategoriPayload>
          }
          createMany: {
            args: Prisma.BukuKategoriCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BukuKategoriCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BukuKategoriPayload>[]
          }
          delete: {
            args: Prisma.BukuKategoriDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BukuKategoriPayload>
          }
          update: {
            args: Prisma.BukuKategoriUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BukuKategoriPayload>
          }
          deleteMany: {
            args: Prisma.BukuKategoriDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BukuKategoriUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BukuKategoriUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BukuKategoriPayload>[]
          }
          upsert: {
            args: Prisma.BukuKategoriUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BukuKategoriPayload>
          }
          aggregate: {
            args: Prisma.BukuKategoriAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBukuKategori>
          }
          groupBy: {
            args: Prisma.BukuKategoriGroupByArgs<ExtArgs>
            result: $Utils.Optional<BukuKategoriGroupByOutputType>[]
          }
          count: {
            args: Prisma.BukuKategoriCountArgs<ExtArgs>
            result: $Utils.Optional<BukuKategoriCountAggregateOutputType> | number
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
    user?: UserOmit
    buku?: BukuOmit
    kategori?: KategoriOmit
    eksemplarBuku?: EksemplarBukuOmit
    peminjaman?: PeminjamanOmit
    bukuKategori?: BukuKategoriOmit
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    peminjaman: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    peminjaman?: boolean | UserCountOutputTypeCountPeminjamanArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPeminjamanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PeminjamanWhereInput
  }


  /**
   * Count Type BukuCountOutputType
   */

  export type BukuCountOutputType = {
    eksemplarBuku: number
    kategori: number
  }

  export type BukuCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    eksemplarBuku?: boolean | BukuCountOutputTypeCountEksemplarBukuArgs
    kategori?: boolean | BukuCountOutputTypeCountKategoriArgs
  }

  // Custom InputTypes
  /**
   * BukuCountOutputType without action
   */
  export type BukuCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BukuCountOutputType
     */
    select?: BukuCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BukuCountOutputType without action
   */
  export type BukuCountOutputTypeCountEksemplarBukuArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EksemplarBukuWhereInput
  }

  /**
   * BukuCountOutputType without action
   */
  export type BukuCountOutputTypeCountKategoriArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BukuKategoriWhereInput
  }


  /**
   * Count Type KategoriCountOutputType
   */

  export type KategoriCountOutputType = {
    buku: number
  }

  export type KategoriCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    buku?: boolean | KategoriCountOutputTypeCountBukuArgs
  }

  // Custom InputTypes
  /**
   * KategoriCountOutputType without action
   */
  export type KategoriCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KategoriCountOutputType
     */
    select?: KategoriCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * KategoriCountOutputType without action
   */
  export type KategoriCountOutputTypeCountBukuArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BukuKategoriWhereInput
  }


  /**
   * Count Type EksemplarBukuCountOutputType
   */

  export type EksemplarBukuCountOutputType = {
    peminjaman: number
  }

  export type EksemplarBukuCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    peminjaman?: boolean | EksemplarBukuCountOutputTypeCountPeminjamanArgs
  }

  // Custom InputTypes
  /**
   * EksemplarBukuCountOutputType without action
   */
  export type EksemplarBukuCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EksemplarBukuCountOutputType
     */
    select?: EksemplarBukuCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EksemplarBukuCountOutputType without action
   */
  export type EksemplarBukuCountOutputTypeCountPeminjamanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PeminjamanWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    role: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    name: string
    email: string
    password: string
    role: $Enums.Role
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    peminjaman?: boolean | User$peminjamanArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "role" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    peminjaman?: boolean | User$peminjamanArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      peminjaman: Prisma.$PeminjamanPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      password: string
      role: $Enums.Role
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    peminjaman<T extends User$peminjamanArgs<ExtArgs> = {}>(args?: Subset<T, User$peminjamanArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PeminjamanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.peminjaman
   */
  export type User$peminjamanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Peminjaman
     */
    select?: PeminjamanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Peminjaman
     */
    omit?: PeminjamanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeminjamanInclude<ExtArgs> | null
    where?: PeminjamanWhereInput
    orderBy?: PeminjamanOrderByWithRelationInput | PeminjamanOrderByWithRelationInput[]
    cursor?: PeminjamanWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PeminjamanScalarFieldEnum | PeminjamanScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Buku
   */

  export type AggregateBuku = {
    _count: BukuCountAggregateOutputType | null
    _avg: BukuAvgAggregateOutputType | null
    _sum: BukuSumAggregateOutputType | null
    _min: BukuMinAggregateOutputType | null
    _max: BukuMaxAggregateOutputType | null
  }

  export type BukuAvgAggregateOutputType = {
    id: number | null
    tahunTerbit: number | null
    jumlahBuku: number | null
  }

  export type BukuSumAggregateOutputType = {
    id: number | null
    tahunTerbit: number | null
    jumlahBuku: number | null
  }

  export type BukuMinAggregateOutputType = {
    id: number | null
    judul: string | null
    pengarang: string | null
    penerbit: string | null
    tahunTerbit: number | null
    jumlahBuku: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BukuMaxAggregateOutputType = {
    id: number | null
    judul: string | null
    pengarang: string | null
    penerbit: string | null
    tahunTerbit: number | null
    jumlahBuku: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BukuCountAggregateOutputType = {
    id: number
    judul: number
    pengarang: number
    penerbit: number
    tahunTerbit: number
    jumlahBuku: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BukuAvgAggregateInputType = {
    id?: true
    tahunTerbit?: true
    jumlahBuku?: true
  }

  export type BukuSumAggregateInputType = {
    id?: true
    tahunTerbit?: true
    jumlahBuku?: true
  }

  export type BukuMinAggregateInputType = {
    id?: true
    judul?: true
    pengarang?: true
    penerbit?: true
    tahunTerbit?: true
    jumlahBuku?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BukuMaxAggregateInputType = {
    id?: true
    judul?: true
    pengarang?: true
    penerbit?: true
    tahunTerbit?: true
    jumlahBuku?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BukuCountAggregateInputType = {
    id?: true
    judul?: true
    pengarang?: true
    penerbit?: true
    tahunTerbit?: true
    jumlahBuku?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BukuAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Buku to aggregate.
     */
    where?: BukuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bukus to fetch.
     */
    orderBy?: BukuOrderByWithRelationInput | BukuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BukuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bukus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bukus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Bukus
    **/
    _count?: true | BukuCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BukuAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BukuSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BukuMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BukuMaxAggregateInputType
  }

  export type GetBukuAggregateType<T extends BukuAggregateArgs> = {
        [P in keyof T & keyof AggregateBuku]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBuku[P]>
      : GetScalarType<T[P], AggregateBuku[P]>
  }




  export type BukuGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BukuWhereInput
    orderBy?: BukuOrderByWithAggregationInput | BukuOrderByWithAggregationInput[]
    by: BukuScalarFieldEnum[] | BukuScalarFieldEnum
    having?: BukuScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BukuCountAggregateInputType | true
    _avg?: BukuAvgAggregateInputType
    _sum?: BukuSumAggregateInputType
    _min?: BukuMinAggregateInputType
    _max?: BukuMaxAggregateInputType
  }

  export type BukuGroupByOutputType = {
    id: number
    judul: string
    pengarang: string
    penerbit: string
    tahunTerbit: number
    jumlahBuku: number
    createdAt: Date
    updatedAt: Date
    _count: BukuCountAggregateOutputType | null
    _avg: BukuAvgAggregateOutputType | null
    _sum: BukuSumAggregateOutputType | null
    _min: BukuMinAggregateOutputType | null
    _max: BukuMaxAggregateOutputType | null
  }

  type GetBukuGroupByPayload<T extends BukuGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BukuGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BukuGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BukuGroupByOutputType[P]>
            : GetScalarType<T[P], BukuGroupByOutputType[P]>
        }
      >
    >


  export type BukuSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    judul?: boolean
    pengarang?: boolean
    penerbit?: boolean
    tahunTerbit?: boolean
    jumlahBuku?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    eksemplarBuku?: boolean | Buku$eksemplarBukuArgs<ExtArgs>
    kategori?: boolean | Buku$kategoriArgs<ExtArgs>
    _count?: boolean | BukuCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["buku"]>

  export type BukuSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    judul?: boolean
    pengarang?: boolean
    penerbit?: boolean
    tahunTerbit?: boolean
    jumlahBuku?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["buku"]>

  export type BukuSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    judul?: boolean
    pengarang?: boolean
    penerbit?: boolean
    tahunTerbit?: boolean
    jumlahBuku?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["buku"]>

  export type BukuSelectScalar = {
    id?: boolean
    judul?: boolean
    pengarang?: boolean
    penerbit?: boolean
    tahunTerbit?: boolean
    jumlahBuku?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BukuOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "judul" | "pengarang" | "penerbit" | "tahunTerbit" | "jumlahBuku" | "createdAt" | "updatedAt", ExtArgs["result"]["buku"]>
  export type BukuInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    eksemplarBuku?: boolean | Buku$eksemplarBukuArgs<ExtArgs>
    kategori?: boolean | Buku$kategoriArgs<ExtArgs>
    _count?: boolean | BukuCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BukuIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type BukuIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $BukuPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Buku"
    objects: {
      eksemplarBuku: Prisma.$EksemplarBukuPayload<ExtArgs>[]
      kategori: Prisma.$BukuKategoriPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      judul: string
      pengarang: string
      penerbit: string
      tahunTerbit: number
      jumlahBuku: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["buku"]>
    composites: {}
  }

  type BukuGetPayload<S extends boolean | null | undefined | BukuDefaultArgs> = $Result.GetResult<Prisma.$BukuPayload, S>

  type BukuCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BukuFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BukuCountAggregateInputType | true
    }

  export interface BukuDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Buku'], meta: { name: 'Buku' } }
    /**
     * Find zero or one Buku that matches the filter.
     * @param {BukuFindUniqueArgs} args - Arguments to find a Buku
     * @example
     * // Get one Buku
     * const buku = await prisma.buku.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BukuFindUniqueArgs>(args: SelectSubset<T, BukuFindUniqueArgs<ExtArgs>>): Prisma__BukuClient<$Result.GetResult<Prisma.$BukuPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Buku that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BukuFindUniqueOrThrowArgs} args - Arguments to find a Buku
     * @example
     * // Get one Buku
     * const buku = await prisma.buku.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BukuFindUniqueOrThrowArgs>(args: SelectSubset<T, BukuFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BukuClient<$Result.GetResult<Prisma.$BukuPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Buku that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BukuFindFirstArgs} args - Arguments to find a Buku
     * @example
     * // Get one Buku
     * const buku = await prisma.buku.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BukuFindFirstArgs>(args?: SelectSubset<T, BukuFindFirstArgs<ExtArgs>>): Prisma__BukuClient<$Result.GetResult<Prisma.$BukuPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Buku that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BukuFindFirstOrThrowArgs} args - Arguments to find a Buku
     * @example
     * // Get one Buku
     * const buku = await prisma.buku.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BukuFindFirstOrThrowArgs>(args?: SelectSubset<T, BukuFindFirstOrThrowArgs<ExtArgs>>): Prisma__BukuClient<$Result.GetResult<Prisma.$BukuPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Bukus that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BukuFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bukus
     * const bukus = await prisma.buku.findMany()
     * 
     * // Get first 10 Bukus
     * const bukus = await prisma.buku.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bukuWithIdOnly = await prisma.buku.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BukuFindManyArgs>(args?: SelectSubset<T, BukuFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BukuPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Buku.
     * @param {BukuCreateArgs} args - Arguments to create a Buku.
     * @example
     * // Create one Buku
     * const Buku = await prisma.buku.create({
     *   data: {
     *     // ... data to create a Buku
     *   }
     * })
     * 
     */
    create<T extends BukuCreateArgs>(args: SelectSubset<T, BukuCreateArgs<ExtArgs>>): Prisma__BukuClient<$Result.GetResult<Prisma.$BukuPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Bukus.
     * @param {BukuCreateManyArgs} args - Arguments to create many Bukus.
     * @example
     * // Create many Bukus
     * const buku = await prisma.buku.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BukuCreateManyArgs>(args?: SelectSubset<T, BukuCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Bukus and returns the data saved in the database.
     * @param {BukuCreateManyAndReturnArgs} args - Arguments to create many Bukus.
     * @example
     * // Create many Bukus
     * const buku = await prisma.buku.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Bukus and only return the `id`
     * const bukuWithIdOnly = await prisma.buku.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BukuCreateManyAndReturnArgs>(args?: SelectSubset<T, BukuCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BukuPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Buku.
     * @param {BukuDeleteArgs} args - Arguments to delete one Buku.
     * @example
     * // Delete one Buku
     * const Buku = await prisma.buku.delete({
     *   where: {
     *     // ... filter to delete one Buku
     *   }
     * })
     * 
     */
    delete<T extends BukuDeleteArgs>(args: SelectSubset<T, BukuDeleteArgs<ExtArgs>>): Prisma__BukuClient<$Result.GetResult<Prisma.$BukuPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Buku.
     * @param {BukuUpdateArgs} args - Arguments to update one Buku.
     * @example
     * // Update one Buku
     * const buku = await prisma.buku.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BukuUpdateArgs>(args: SelectSubset<T, BukuUpdateArgs<ExtArgs>>): Prisma__BukuClient<$Result.GetResult<Prisma.$BukuPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Bukus.
     * @param {BukuDeleteManyArgs} args - Arguments to filter Bukus to delete.
     * @example
     * // Delete a few Bukus
     * const { count } = await prisma.buku.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BukuDeleteManyArgs>(args?: SelectSubset<T, BukuDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bukus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BukuUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bukus
     * const buku = await prisma.buku.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BukuUpdateManyArgs>(args: SelectSubset<T, BukuUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bukus and returns the data updated in the database.
     * @param {BukuUpdateManyAndReturnArgs} args - Arguments to update many Bukus.
     * @example
     * // Update many Bukus
     * const buku = await prisma.buku.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Bukus and only return the `id`
     * const bukuWithIdOnly = await prisma.buku.updateManyAndReturn({
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
    updateManyAndReturn<T extends BukuUpdateManyAndReturnArgs>(args: SelectSubset<T, BukuUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BukuPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Buku.
     * @param {BukuUpsertArgs} args - Arguments to update or create a Buku.
     * @example
     * // Update or create a Buku
     * const buku = await prisma.buku.upsert({
     *   create: {
     *     // ... data to create a Buku
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Buku we want to update
     *   }
     * })
     */
    upsert<T extends BukuUpsertArgs>(args: SelectSubset<T, BukuUpsertArgs<ExtArgs>>): Prisma__BukuClient<$Result.GetResult<Prisma.$BukuPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Bukus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BukuCountArgs} args - Arguments to filter Bukus to count.
     * @example
     * // Count the number of Bukus
     * const count = await prisma.buku.count({
     *   where: {
     *     // ... the filter for the Bukus we want to count
     *   }
     * })
    **/
    count<T extends BukuCountArgs>(
      args?: Subset<T, BukuCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BukuCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Buku.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BukuAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BukuAggregateArgs>(args: Subset<T, BukuAggregateArgs>): Prisma.PrismaPromise<GetBukuAggregateType<T>>

    /**
     * Group by Buku.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BukuGroupByArgs} args - Group by arguments.
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
      T extends BukuGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BukuGroupByArgs['orderBy'] }
        : { orderBy?: BukuGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BukuGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBukuGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Buku model
   */
  readonly fields: BukuFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Buku.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BukuClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    eksemplarBuku<T extends Buku$eksemplarBukuArgs<ExtArgs> = {}>(args?: Subset<T, Buku$eksemplarBukuArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EksemplarBukuPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    kategori<T extends Buku$kategoriArgs<ExtArgs> = {}>(args?: Subset<T, Buku$kategoriArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BukuKategoriPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Buku model
   */
  interface BukuFieldRefs {
    readonly id: FieldRef<"Buku", 'Int'>
    readonly judul: FieldRef<"Buku", 'String'>
    readonly pengarang: FieldRef<"Buku", 'String'>
    readonly penerbit: FieldRef<"Buku", 'String'>
    readonly tahunTerbit: FieldRef<"Buku", 'Int'>
    readonly jumlahBuku: FieldRef<"Buku", 'Int'>
    readonly createdAt: FieldRef<"Buku", 'DateTime'>
    readonly updatedAt: FieldRef<"Buku", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Buku findUnique
   */
  export type BukuFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Buku
     */
    select?: BukuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Buku
     */
    omit?: BukuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BukuInclude<ExtArgs> | null
    /**
     * Filter, which Buku to fetch.
     */
    where: BukuWhereUniqueInput
  }

  /**
   * Buku findUniqueOrThrow
   */
  export type BukuFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Buku
     */
    select?: BukuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Buku
     */
    omit?: BukuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BukuInclude<ExtArgs> | null
    /**
     * Filter, which Buku to fetch.
     */
    where: BukuWhereUniqueInput
  }

  /**
   * Buku findFirst
   */
  export type BukuFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Buku
     */
    select?: BukuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Buku
     */
    omit?: BukuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BukuInclude<ExtArgs> | null
    /**
     * Filter, which Buku to fetch.
     */
    where?: BukuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bukus to fetch.
     */
    orderBy?: BukuOrderByWithRelationInput | BukuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bukus.
     */
    cursor?: BukuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bukus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bukus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bukus.
     */
    distinct?: BukuScalarFieldEnum | BukuScalarFieldEnum[]
  }

  /**
   * Buku findFirstOrThrow
   */
  export type BukuFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Buku
     */
    select?: BukuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Buku
     */
    omit?: BukuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BukuInclude<ExtArgs> | null
    /**
     * Filter, which Buku to fetch.
     */
    where?: BukuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bukus to fetch.
     */
    orderBy?: BukuOrderByWithRelationInput | BukuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bukus.
     */
    cursor?: BukuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bukus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bukus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bukus.
     */
    distinct?: BukuScalarFieldEnum | BukuScalarFieldEnum[]
  }

  /**
   * Buku findMany
   */
  export type BukuFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Buku
     */
    select?: BukuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Buku
     */
    omit?: BukuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BukuInclude<ExtArgs> | null
    /**
     * Filter, which Bukus to fetch.
     */
    where?: BukuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bukus to fetch.
     */
    orderBy?: BukuOrderByWithRelationInput | BukuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Bukus.
     */
    cursor?: BukuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bukus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bukus.
     */
    skip?: number
    distinct?: BukuScalarFieldEnum | BukuScalarFieldEnum[]
  }

  /**
   * Buku create
   */
  export type BukuCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Buku
     */
    select?: BukuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Buku
     */
    omit?: BukuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BukuInclude<ExtArgs> | null
    /**
     * The data needed to create a Buku.
     */
    data: XOR<BukuCreateInput, BukuUncheckedCreateInput>
  }

  /**
   * Buku createMany
   */
  export type BukuCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Bukus.
     */
    data: BukuCreateManyInput | BukuCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Buku createManyAndReturn
   */
  export type BukuCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Buku
     */
    select?: BukuSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Buku
     */
    omit?: BukuOmit<ExtArgs> | null
    /**
     * The data used to create many Bukus.
     */
    data: BukuCreateManyInput | BukuCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Buku update
   */
  export type BukuUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Buku
     */
    select?: BukuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Buku
     */
    omit?: BukuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BukuInclude<ExtArgs> | null
    /**
     * The data needed to update a Buku.
     */
    data: XOR<BukuUpdateInput, BukuUncheckedUpdateInput>
    /**
     * Choose, which Buku to update.
     */
    where: BukuWhereUniqueInput
  }

  /**
   * Buku updateMany
   */
  export type BukuUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Bukus.
     */
    data: XOR<BukuUpdateManyMutationInput, BukuUncheckedUpdateManyInput>
    /**
     * Filter which Bukus to update
     */
    where?: BukuWhereInput
    /**
     * Limit how many Bukus to update.
     */
    limit?: number
  }

  /**
   * Buku updateManyAndReturn
   */
  export type BukuUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Buku
     */
    select?: BukuSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Buku
     */
    omit?: BukuOmit<ExtArgs> | null
    /**
     * The data used to update Bukus.
     */
    data: XOR<BukuUpdateManyMutationInput, BukuUncheckedUpdateManyInput>
    /**
     * Filter which Bukus to update
     */
    where?: BukuWhereInput
    /**
     * Limit how many Bukus to update.
     */
    limit?: number
  }

  /**
   * Buku upsert
   */
  export type BukuUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Buku
     */
    select?: BukuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Buku
     */
    omit?: BukuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BukuInclude<ExtArgs> | null
    /**
     * The filter to search for the Buku to update in case it exists.
     */
    where: BukuWhereUniqueInput
    /**
     * In case the Buku found by the `where` argument doesn't exist, create a new Buku with this data.
     */
    create: XOR<BukuCreateInput, BukuUncheckedCreateInput>
    /**
     * In case the Buku was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BukuUpdateInput, BukuUncheckedUpdateInput>
  }

  /**
   * Buku delete
   */
  export type BukuDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Buku
     */
    select?: BukuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Buku
     */
    omit?: BukuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BukuInclude<ExtArgs> | null
    /**
     * Filter which Buku to delete.
     */
    where: BukuWhereUniqueInput
  }

  /**
   * Buku deleteMany
   */
  export type BukuDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bukus to delete
     */
    where?: BukuWhereInput
    /**
     * Limit how many Bukus to delete.
     */
    limit?: number
  }

  /**
   * Buku.eksemplarBuku
   */
  export type Buku$eksemplarBukuArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EksemplarBuku
     */
    select?: EksemplarBukuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EksemplarBuku
     */
    omit?: EksemplarBukuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EksemplarBukuInclude<ExtArgs> | null
    where?: EksemplarBukuWhereInput
    orderBy?: EksemplarBukuOrderByWithRelationInput | EksemplarBukuOrderByWithRelationInput[]
    cursor?: EksemplarBukuWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EksemplarBukuScalarFieldEnum | EksemplarBukuScalarFieldEnum[]
  }

  /**
   * Buku.kategori
   */
  export type Buku$kategoriArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BukuKategori
     */
    select?: BukuKategoriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BukuKategori
     */
    omit?: BukuKategoriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BukuKategoriInclude<ExtArgs> | null
    where?: BukuKategoriWhereInput
    orderBy?: BukuKategoriOrderByWithRelationInput | BukuKategoriOrderByWithRelationInput[]
    cursor?: BukuKategoriWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BukuKategoriScalarFieldEnum | BukuKategoriScalarFieldEnum[]
  }

  /**
   * Buku without action
   */
  export type BukuDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Buku
     */
    select?: BukuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Buku
     */
    omit?: BukuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BukuInclude<ExtArgs> | null
  }


  /**
   * Model Kategori
   */

  export type AggregateKategori = {
    _count: KategoriCountAggregateOutputType | null
    _avg: KategoriAvgAggregateOutputType | null
    _sum: KategoriSumAggregateOutputType | null
    _min: KategoriMinAggregateOutputType | null
    _max: KategoriMaxAggregateOutputType | null
  }

  export type KategoriAvgAggregateOutputType = {
    id: number | null
  }

  export type KategoriSumAggregateOutputType = {
    id: number | null
  }

  export type KategoriMinAggregateOutputType = {
    id: number | null
    nama: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type KategoriMaxAggregateOutputType = {
    id: number | null
    nama: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type KategoriCountAggregateOutputType = {
    id: number
    nama: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type KategoriAvgAggregateInputType = {
    id?: true
  }

  export type KategoriSumAggregateInputType = {
    id?: true
  }

  export type KategoriMinAggregateInputType = {
    id?: true
    nama?: true
    createdAt?: true
    updatedAt?: true
  }

  export type KategoriMaxAggregateInputType = {
    id?: true
    nama?: true
    createdAt?: true
    updatedAt?: true
  }

  export type KategoriCountAggregateInputType = {
    id?: true
    nama?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type KategoriAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Kategori to aggregate.
     */
    where?: KategoriWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Kategoris to fetch.
     */
    orderBy?: KategoriOrderByWithRelationInput | KategoriOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: KategoriWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Kategoris from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Kategoris.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Kategoris
    **/
    _count?: true | KategoriCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: KategoriAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: KategoriSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: KategoriMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: KategoriMaxAggregateInputType
  }

  export type GetKategoriAggregateType<T extends KategoriAggregateArgs> = {
        [P in keyof T & keyof AggregateKategori]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateKategori[P]>
      : GetScalarType<T[P], AggregateKategori[P]>
  }




  export type KategoriGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: KategoriWhereInput
    orderBy?: KategoriOrderByWithAggregationInput | KategoriOrderByWithAggregationInput[]
    by: KategoriScalarFieldEnum[] | KategoriScalarFieldEnum
    having?: KategoriScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: KategoriCountAggregateInputType | true
    _avg?: KategoriAvgAggregateInputType
    _sum?: KategoriSumAggregateInputType
    _min?: KategoriMinAggregateInputType
    _max?: KategoriMaxAggregateInputType
  }

  export type KategoriGroupByOutputType = {
    id: number
    nama: string
    createdAt: Date
    updatedAt: Date
    _count: KategoriCountAggregateOutputType | null
    _avg: KategoriAvgAggregateOutputType | null
    _sum: KategoriSumAggregateOutputType | null
    _min: KategoriMinAggregateOutputType | null
    _max: KategoriMaxAggregateOutputType | null
  }

  type GetKategoriGroupByPayload<T extends KategoriGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<KategoriGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof KategoriGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], KategoriGroupByOutputType[P]>
            : GetScalarType<T[P], KategoriGroupByOutputType[P]>
        }
      >
    >


  export type KategoriSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    buku?: boolean | Kategori$bukuArgs<ExtArgs>
    _count?: boolean | KategoriCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["kategori"]>

  export type KategoriSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["kategori"]>

  export type KategoriSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["kategori"]>

  export type KategoriSelectScalar = {
    id?: boolean
    nama?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type KategoriOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nama" | "createdAt" | "updatedAt", ExtArgs["result"]["kategori"]>
  export type KategoriInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    buku?: boolean | Kategori$bukuArgs<ExtArgs>
    _count?: boolean | KategoriCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type KategoriIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type KategoriIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $KategoriPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Kategori"
    objects: {
      buku: Prisma.$BukuKategoriPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nama: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["kategori"]>
    composites: {}
  }

  type KategoriGetPayload<S extends boolean | null | undefined | KategoriDefaultArgs> = $Result.GetResult<Prisma.$KategoriPayload, S>

  type KategoriCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<KategoriFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: KategoriCountAggregateInputType | true
    }

  export interface KategoriDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Kategori'], meta: { name: 'Kategori' } }
    /**
     * Find zero or one Kategori that matches the filter.
     * @param {KategoriFindUniqueArgs} args - Arguments to find a Kategori
     * @example
     * // Get one Kategori
     * const kategori = await prisma.kategori.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends KategoriFindUniqueArgs>(args: SelectSubset<T, KategoriFindUniqueArgs<ExtArgs>>): Prisma__KategoriClient<$Result.GetResult<Prisma.$KategoriPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Kategori that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {KategoriFindUniqueOrThrowArgs} args - Arguments to find a Kategori
     * @example
     * // Get one Kategori
     * const kategori = await prisma.kategori.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends KategoriFindUniqueOrThrowArgs>(args: SelectSubset<T, KategoriFindUniqueOrThrowArgs<ExtArgs>>): Prisma__KategoriClient<$Result.GetResult<Prisma.$KategoriPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Kategori that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KategoriFindFirstArgs} args - Arguments to find a Kategori
     * @example
     * // Get one Kategori
     * const kategori = await prisma.kategori.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends KategoriFindFirstArgs>(args?: SelectSubset<T, KategoriFindFirstArgs<ExtArgs>>): Prisma__KategoriClient<$Result.GetResult<Prisma.$KategoriPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Kategori that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KategoriFindFirstOrThrowArgs} args - Arguments to find a Kategori
     * @example
     * // Get one Kategori
     * const kategori = await prisma.kategori.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends KategoriFindFirstOrThrowArgs>(args?: SelectSubset<T, KategoriFindFirstOrThrowArgs<ExtArgs>>): Prisma__KategoriClient<$Result.GetResult<Prisma.$KategoriPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Kategoris that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KategoriFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Kategoris
     * const kategoris = await prisma.kategori.findMany()
     * 
     * // Get first 10 Kategoris
     * const kategoris = await prisma.kategori.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const kategoriWithIdOnly = await prisma.kategori.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends KategoriFindManyArgs>(args?: SelectSubset<T, KategoriFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KategoriPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Kategori.
     * @param {KategoriCreateArgs} args - Arguments to create a Kategori.
     * @example
     * // Create one Kategori
     * const Kategori = await prisma.kategori.create({
     *   data: {
     *     // ... data to create a Kategori
     *   }
     * })
     * 
     */
    create<T extends KategoriCreateArgs>(args: SelectSubset<T, KategoriCreateArgs<ExtArgs>>): Prisma__KategoriClient<$Result.GetResult<Prisma.$KategoriPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Kategoris.
     * @param {KategoriCreateManyArgs} args - Arguments to create many Kategoris.
     * @example
     * // Create many Kategoris
     * const kategori = await prisma.kategori.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends KategoriCreateManyArgs>(args?: SelectSubset<T, KategoriCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Kategoris and returns the data saved in the database.
     * @param {KategoriCreateManyAndReturnArgs} args - Arguments to create many Kategoris.
     * @example
     * // Create many Kategoris
     * const kategori = await prisma.kategori.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Kategoris and only return the `id`
     * const kategoriWithIdOnly = await prisma.kategori.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends KategoriCreateManyAndReturnArgs>(args?: SelectSubset<T, KategoriCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KategoriPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Kategori.
     * @param {KategoriDeleteArgs} args - Arguments to delete one Kategori.
     * @example
     * // Delete one Kategori
     * const Kategori = await prisma.kategori.delete({
     *   where: {
     *     // ... filter to delete one Kategori
     *   }
     * })
     * 
     */
    delete<T extends KategoriDeleteArgs>(args: SelectSubset<T, KategoriDeleteArgs<ExtArgs>>): Prisma__KategoriClient<$Result.GetResult<Prisma.$KategoriPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Kategori.
     * @param {KategoriUpdateArgs} args - Arguments to update one Kategori.
     * @example
     * // Update one Kategori
     * const kategori = await prisma.kategori.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends KategoriUpdateArgs>(args: SelectSubset<T, KategoriUpdateArgs<ExtArgs>>): Prisma__KategoriClient<$Result.GetResult<Prisma.$KategoriPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Kategoris.
     * @param {KategoriDeleteManyArgs} args - Arguments to filter Kategoris to delete.
     * @example
     * // Delete a few Kategoris
     * const { count } = await prisma.kategori.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends KategoriDeleteManyArgs>(args?: SelectSubset<T, KategoriDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Kategoris.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KategoriUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Kategoris
     * const kategori = await prisma.kategori.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends KategoriUpdateManyArgs>(args: SelectSubset<T, KategoriUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Kategoris and returns the data updated in the database.
     * @param {KategoriUpdateManyAndReturnArgs} args - Arguments to update many Kategoris.
     * @example
     * // Update many Kategoris
     * const kategori = await prisma.kategori.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Kategoris and only return the `id`
     * const kategoriWithIdOnly = await prisma.kategori.updateManyAndReturn({
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
    updateManyAndReturn<T extends KategoriUpdateManyAndReturnArgs>(args: SelectSubset<T, KategoriUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KategoriPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Kategori.
     * @param {KategoriUpsertArgs} args - Arguments to update or create a Kategori.
     * @example
     * // Update or create a Kategori
     * const kategori = await prisma.kategori.upsert({
     *   create: {
     *     // ... data to create a Kategori
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Kategori we want to update
     *   }
     * })
     */
    upsert<T extends KategoriUpsertArgs>(args: SelectSubset<T, KategoriUpsertArgs<ExtArgs>>): Prisma__KategoriClient<$Result.GetResult<Prisma.$KategoriPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Kategoris.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KategoriCountArgs} args - Arguments to filter Kategoris to count.
     * @example
     * // Count the number of Kategoris
     * const count = await prisma.kategori.count({
     *   where: {
     *     // ... the filter for the Kategoris we want to count
     *   }
     * })
    **/
    count<T extends KategoriCountArgs>(
      args?: Subset<T, KategoriCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], KategoriCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Kategori.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KategoriAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends KategoriAggregateArgs>(args: Subset<T, KategoriAggregateArgs>): Prisma.PrismaPromise<GetKategoriAggregateType<T>>

    /**
     * Group by Kategori.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KategoriGroupByArgs} args - Group by arguments.
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
      T extends KategoriGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: KategoriGroupByArgs['orderBy'] }
        : { orderBy?: KategoriGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, KategoriGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetKategoriGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Kategori model
   */
  readonly fields: KategoriFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Kategori.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__KategoriClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    buku<T extends Kategori$bukuArgs<ExtArgs> = {}>(args?: Subset<T, Kategori$bukuArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BukuKategoriPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Kategori model
   */
  interface KategoriFieldRefs {
    readonly id: FieldRef<"Kategori", 'Int'>
    readonly nama: FieldRef<"Kategori", 'String'>
    readonly createdAt: FieldRef<"Kategori", 'DateTime'>
    readonly updatedAt: FieldRef<"Kategori", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Kategori findUnique
   */
  export type KategoriFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kategori
     */
    select?: KategoriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kategori
     */
    omit?: KategoriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KategoriInclude<ExtArgs> | null
    /**
     * Filter, which Kategori to fetch.
     */
    where: KategoriWhereUniqueInput
  }

  /**
   * Kategori findUniqueOrThrow
   */
  export type KategoriFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kategori
     */
    select?: KategoriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kategori
     */
    omit?: KategoriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KategoriInclude<ExtArgs> | null
    /**
     * Filter, which Kategori to fetch.
     */
    where: KategoriWhereUniqueInput
  }

  /**
   * Kategori findFirst
   */
  export type KategoriFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kategori
     */
    select?: KategoriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kategori
     */
    omit?: KategoriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KategoriInclude<ExtArgs> | null
    /**
     * Filter, which Kategori to fetch.
     */
    where?: KategoriWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Kategoris to fetch.
     */
    orderBy?: KategoriOrderByWithRelationInput | KategoriOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Kategoris.
     */
    cursor?: KategoriWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Kategoris from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Kategoris.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Kategoris.
     */
    distinct?: KategoriScalarFieldEnum | KategoriScalarFieldEnum[]
  }

  /**
   * Kategori findFirstOrThrow
   */
  export type KategoriFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kategori
     */
    select?: KategoriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kategori
     */
    omit?: KategoriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KategoriInclude<ExtArgs> | null
    /**
     * Filter, which Kategori to fetch.
     */
    where?: KategoriWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Kategoris to fetch.
     */
    orderBy?: KategoriOrderByWithRelationInput | KategoriOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Kategoris.
     */
    cursor?: KategoriWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Kategoris from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Kategoris.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Kategoris.
     */
    distinct?: KategoriScalarFieldEnum | KategoriScalarFieldEnum[]
  }

  /**
   * Kategori findMany
   */
  export type KategoriFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kategori
     */
    select?: KategoriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kategori
     */
    omit?: KategoriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KategoriInclude<ExtArgs> | null
    /**
     * Filter, which Kategoris to fetch.
     */
    where?: KategoriWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Kategoris to fetch.
     */
    orderBy?: KategoriOrderByWithRelationInput | KategoriOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Kategoris.
     */
    cursor?: KategoriWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Kategoris from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Kategoris.
     */
    skip?: number
    distinct?: KategoriScalarFieldEnum | KategoriScalarFieldEnum[]
  }

  /**
   * Kategori create
   */
  export type KategoriCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kategori
     */
    select?: KategoriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kategori
     */
    omit?: KategoriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KategoriInclude<ExtArgs> | null
    /**
     * The data needed to create a Kategori.
     */
    data: XOR<KategoriCreateInput, KategoriUncheckedCreateInput>
  }

  /**
   * Kategori createMany
   */
  export type KategoriCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Kategoris.
     */
    data: KategoriCreateManyInput | KategoriCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Kategori createManyAndReturn
   */
  export type KategoriCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kategori
     */
    select?: KategoriSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Kategori
     */
    omit?: KategoriOmit<ExtArgs> | null
    /**
     * The data used to create many Kategoris.
     */
    data: KategoriCreateManyInput | KategoriCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Kategori update
   */
  export type KategoriUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kategori
     */
    select?: KategoriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kategori
     */
    omit?: KategoriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KategoriInclude<ExtArgs> | null
    /**
     * The data needed to update a Kategori.
     */
    data: XOR<KategoriUpdateInput, KategoriUncheckedUpdateInput>
    /**
     * Choose, which Kategori to update.
     */
    where: KategoriWhereUniqueInput
  }

  /**
   * Kategori updateMany
   */
  export type KategoriUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Kategoris.
     */
    data: XOR<KategoriUpdateManyMutationInput, KategoriUncheckedUpdateManyInput>
    /**
     * Filter which Kategoris to update
     */
    where?: KategoriWhereInput
    /**
     * Limit how many Kategoris to update.
     */
    limit?: number
  }

  /**
   * Kategori updateManyAndReturn
   */
  export type KategoriUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kategori
     */
    select?: KategoriSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Kategori
     */
    omit?: KategoriOmit<ExtArgs> | null
    /**
     * The data used to update Kategoris.
     */
    data: XOR<KategoriUpdateManyMutationInput, KategoriUncheckedUpdateManyInput>
    /**
     * Filter which Kategoris to update
     */
    where?: KategoriWhereInput
    /**
     * Limit how many Kategoris to update.
     */
    limit?: number
  }

  /**
   * Kategori upsert
   */
  export type KategoriUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kategori
     */
    select?: KategoriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kategori
     */
    omit?: KategoriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KategoriInclude<ExtArgs> | null
    /**
     * The filter to search for the Kategori to update in case it exists.
     */
    where: KategoriWhereUniqueInput
    /**
     * In case the Kategori found by the `where` argument doesn't exist, create a new Kategori with this data.
     */
    create: XOR<KategoriCreateInput, KategoriUncheckedCreateInput>
    /**
     * In case the Kategori was found with the provided `where` argument, update it with this data.
     */
    update: XOR<KategoriUpdateInput, KategoriUncheckedUpdateInput>
  }

  /**
   * Kategori delete
   */
  export type KategoriDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kategori
     */
    select?: KategoriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kategori
     */
    omit?: KategoriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KategoriInclude<ExtArgs> | null
    /**
     * Filter which Kategori to delete.
     */
    where: KategoriWhereUniqueInput
  }

  /**
   * Kategori deleteMany
   */
  export type KategoriDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Kategoris to delete
     */
    where?: KategoriWhereInput
    /**
     * Limit how many Kategoris to delete.
     */
    limit?: number
  }

  /**
   * Kategori.buku
   */
  export type Kategori$bukuArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BukuKategori
     */
    select?: BukuKategoriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BukuKategori
     */
    omit?: BukuKategoriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BukuKategoriInclude<ExtArgs> | null
    where?: BukuKategoriWhereInput
    orderBy?: BukuKategoriOrderByWithRelationInput | BukuKategoriOrderByWithRelationInput[]
    cursor?: BukuKategoriWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BukuKategoriScalarFieldEnum | BukuKategoriScalarFieldEnum[]
  }

  /**
   * Kategori without action
   */
  export type KategoriDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kategori
     */
    select?: KategoriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kategori
     */
    omit?: KategoriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KategoriInclude<ExtArgs> | null
  }


  /**
   * Model EksemplarBuku
   */

  export type AggregateEksemplarBuku = {
    _count: EksemplarBukuCountAggregateOutputType | null
    _avg: EksemplarBukuAvgAggregateOutputType | null
    _sum: EksemplarBukuSumAggregateOutputType | null
    _min: EksemplarBukuMinAggregateOutputType | null
    _max: EksemplarBukuMaxAggregateOutputType | null
  }

  export type EksemplarBukuAvgAggregateOutputType = {
    id: number | null
    bukuId: number | null
  }

  export type EksemplarBukuSumAggregateOutputType = {
    id: number | null
    bukuId: number | null
  }

  export type EksemplarBukuMinAggregateOutputType = {
    id: number | null
    kodeEksemplar: string | null
    bukuId: number | null
    status: $Enums.Status | null
    isArchived: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EksemplarBukuMaxAggregateOutputType = {
    id: number | null
    kodeEksemplar: string | null
    bukuId: number | null
    status: $Enums.Status | null
    isArchived: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EksemplarBukuCountAggregateOutputType = {
    id: number
    kodeEksemplar: number
    bukuId: number
    status: number
    isArchived: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EksemplarBukuAvgAggregateInputType = {
    id?: true
    bukuId?: true
  }

  export type EksemplarBukuSumAggregateInputType = {
    id?: true
    bukuId?: true
  }

  export type EksemplarBukuMinAggregateInputType = {
    id?: true
    kodeEksemplar?: true
    bukuId?: true
    status?: true
    isArchived?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EksemplarBukuMaxAggregateInputType = {
    id?: true
    kodeEksemplar?: true
    bukuId?: true
    status?: true
    isArchived?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EksemplarBukuCountAggregateInputType = {
    id?: true
    kodeEksemplar?: true
    bukuId?: true
    status?: true
    isArchived?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EksemplarBukuAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EksemplarBuku to aggregate.
     */
    where?: EksemplarBukuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EksemplarBukus to fetch.
     */
    orderBy?: EksemplarBukuOrderByWithRelationInput | EksemplarBukuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EksemplarBukuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EksemplarBukus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EksemplarBukus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EksemplarBukus
    **/
    _count?: true | EksemplarBukuCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EksemplarBukuAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EksemplarBukuSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EksemplarBukuMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EksemplarBukuMaxAggregateInputType
  }

  export type GetEksemplarBukuAggregateType<T extends EksemplarBukuAggregateArgs> = {
        [P in keyof T & keyof AggregateEksemplarBuku]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEksemplarBuku[P]>
      : GetScalarType<T[P], AggregateEksemplarBuku[P]>
  }




  export type EksemplarBukuGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EksemplarBukuWhereInput
    orderBy?: EksemplarBukuOrderByWithAggregationInput | EksemplarBukuOrderByWithAggregationInput[]
    by: EksemplarBukuScalarFieldEnum[] | EksemplarBukuScalarFieldEnum
    having?: EksemplarBukuScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EksemplarBukuCountAggregateInputType | true
    _avg?: EksemplarBukuAvgAggregateInputType
    _sum?: EksemplarBukuSumAggregateInputType
    _min?: EksemplarBukuMinAggregateInputType
    _max?: EksemplarBukuMaxAggregateInputType
  }

  export type EksemplarBukuGroupByOutputType = {
    id: number
    kodeEksemplar: string
    bukuId: number
    status: $Enums.Status
    isArchived: boolean
    createdAt: Date
    updatedAt: Date
    _count: EksemplarBukuCountAggregateOutputType | null
    _avg: EksemplarBukuAvgAggregateOutputType | null
    _sum: EksemplarBukuSumAggregateOutputType | null
    _min: EksemplarBukuMinAggregateOutputType | null
    _max: EksemplarBukuMaxAggregateOutputType | null
  }

  type GetEksemplarBukuGroupByPayload<T extends EksemplarBukuGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EksemplarBukuGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EksemplarBukuGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EksemplarBukuGroupByOutputType[P]>
            : GetScalarType<T[P], EksemplarBukuGroupByOutputType[P]>
        }
      >
    >


  export type EksemplarBukuSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    kodeEksemplar?: boolean
    bukuId?: boolean
    status?: boolean
    isArchived?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    buku?: boolean | BukuDefaultArgs<ExtArgs>
    peminjaman?: boolean | EksemplarBuku$peminjamanArgs<ExtArgs>
    _count?: boolean | EksemplarBukuCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["eksemplarBuku"]>

  export type EksemplarBukuSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    kodeEksemplar?: boolean
    bukuId?: boolean
    status?: boolean
    isArchived?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    buku?: boolean | BukuDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["eksemplarBuku"]>

  export type EksemplarBukuSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    kodeEksemplar?: boolean
    bukuId?: boolean
    status?: boolean
    isArchived?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    buku?: boolean | BukuDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["eksemplarBuku"]>

  export type EksemplarBukuSelectScalar = {
    id?: boolean
    kodeEksemplar?: boolean
    bukuId?: boolean
    status?: boolean
    isArchived?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type EksemplarBukuOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "kodeEksemplar" | "bukuId" | "status" | "isArchived" | "createdAt" | "updatedAt", ExtArgs["result"]["eksemplarBuku"]>
  export type EksemplarBukuInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    buku?: boolean | BukuDefaultArgs<ExtArgs>
    peminjaman?: boolean | EksemplarBuku$peminjamanArgs<ExtArgs>
    _count?: boolean | EksemplarBukuCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EksemplarBukuIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    buku?: boolean | BukuDefaultArgs<ExtArgs>
  }
  export type EksemplarBukuIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    buku?: boolean | BukuDefaultArgs<ExtArgs>
  }

  export type $EksemplarBukuPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EksemplarBuku"
    objects: {
      buku: Prisma.$BukuPayload<ExtArgs>
      peminjaman: Prisma.$PeminjamanPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      kodeEksemplar: string
      bukuId: number
      status: $Enums.Status
      isArchived: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["eksemplarBuku"]>
    composites: {}
  }

  type EksemplarBukuGetPayload<S extends boolean | null | undefined | EksemplarBukuDefaultArgs> = $Result.GetResult<Prisma.$EksemplarBukuPayload, S>

  type EksemplarBukuCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EksemplarBukuFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EksemplarBukuCountAggregateInputType | true
    }

  export interface EksemplarBukuDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EksemplarBuku'], meta: { name: 'EksemplarBuku' } }
    /**
     * Find zero or one EksemplarBuku that matches the filter.
     * @param {EksemplarBukuFindUniqueArgs} args - Arguments to find a EksemplarBuku
     * @example
     * // Get one EksemplarBuku
     * const eksemplarBuku = await prisma.eksemplarBuku.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EksemplarBukuFindUniqueArgs>(args: SelectSubset<T, EksemplarBukuFindUniqueArgs<ExtArgs>>): Prisma__EksemplarBukuClient<$Result.GetResult<Prisma.$EksemplarBukuPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EksemplarBuku that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EksemplarBukuFindUniqueOrThrowArgs} args - Arguments to find a EksemplarBuku
     * @example
     * // Get one EksemplarBuku
     * const eksemplarBuku = await prisma.eksemplarBuku.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EksemplarBukuFindUniqueOrThrowArgs>(args: SelectSubset<T, EksemplarBukuFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EksemplarBukuClient<$Result.GetResult<Prisma.$EksemplarBukuPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EksemplarBuku that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EksemplarBukuFindFirstArgs} args - Arguments to find a EksemplarBuku
     * @example
     * // Get one EksemplarBuku
     * const eksemplarBuku = await prisma.eksemplarBuku.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EksemplarBukuFindFirstArgs>(args?: SelectSubset<T, EksemplarBukuFindFirstArgs<ExtArgs>>): Prisma__EksemplarBukuClient<$Result.GetResult<Prisma.$EksemplarBukuPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EksemplarBuku that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EksemplarBukuFindFirstOrThrowArgs} args - Arguments to find a EksemplarBuku
     * @example
     * // Get one EksemplarBuku
     * const eksemplarBuku = await prisma.eksemplarBuku.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EksemplarBukuFindFirstOrThrowArgs>(args?: SelectSubset<T, EksemplarBukuFindFirstOrThrowArgs<ExtArgs>>): Prisma__EksemplarBukuClient<$Result.GetResult<Prisma.$EksemplarBukuPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EksemplarBukus that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EksemplarBukuFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EksemplarBukus
     * const eksemplarBukus = await prisma.eksemplarBuku.findMany()
     * 
     * // Get first 10 EksemplarBukus
     * const eksemplarBukus = await prisma.eksemplarBuku.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eksemplarBukuWithIdOnly = await prisma.eksemplarBuku.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EksemplarBukuFindManyArgs>(args?: SelectSubset<T, EksemplarBukuFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EksemplarBukuPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EksemplarBuku.
     * @param {EksemplarBukuCreateArgs} args - Arguments to create a EksemplarBuku.
     * @example
     * // Create one EksemplarBuku
     * const EksemplarBuku = await prisma.eksemplarBuku.create({
     *   data: {
     *     // ... data to create a EksemplarBuku
     *   }
     * })
     * 
     */
    create<T extends EksemplarBukuCreateArgs>(args: SelectSubset<T, EksemplarBukuCreateArgs<ExtArgs>>): Prisma__EksemplarBukuClient<$Result.GetResult<Prisma.$EksemplarBukuPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EksemplarBukus.
     * @param {EksemplarBukuCreateManyArgs} args - Arguments to create many EksemplarBukus.
     * @example
     * // Create many EksemplarBukus
     * const eksemplarBuku = await prisma.eksemplarBuku.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EksemplarBukuCreateManyArgs>(args?: SelectSubset<T, EksemplarBukuCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EksemplarBukus and returns the data saved in the database.
     * @param {EksemplarBukuCreateManyAndReturnArgs} args - Arguments to create many EksemplarBukus.
     * @example
     * // Create many EksemplarBukus
     * const eksemplarBuku = await prisma.eksemplarBuku.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EksemplarBukus and only return the `id`
     * const eksemplarBukuWithIdOnly = await prisma.eksemplarBuku.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EksemplarBukuCreateManyAndReturnArgs>(args?: SelectSubset<T, EksemplarBukuCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EksemplarBukuPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a EksemplarBuku.
     * @param {EksemplarBukuDeleteArgs} args - Arguments to delete one EksemplarBuku.
     * @example
     * // Delete one EksemplarBuku
     * const EksemplarBuku = await prisma.eksemplarBuku.delete({
     *   where: {
     *     // ... filter to delete one EksemplarBuku
     *   }
     * })
     * 
     */
    delete<T extends EksemplarBukuDeleteArgs>(args: SelectSubset<T, EksemplarBukuDeleteArgs<ExtArgs>>): Prisma__EksemplarBukuClient<$Result.GetResult<Prisma.$EksemplarBukuPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EksemplarBuku.
     * @param {EksemplarBukuUpdateArgs} args - Arguments to update one EksemplarBuku.
     * @example
     * // Update one EksemplarBuku
     * const eksemplarBuku = await prisma.eksemplarBuku.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EksemplarBukuUpdateArgs>(args: SelectSubset<T, EksemplarBukuUpdateArgs<ExtArgs>>): Prisma__EksemplarBukuClient<$Result.GetResult<Prisma.$EksemplarBukuPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EksemplarBukus.
     * @param {EksemplarBukuDeleteManyArgs} args - Arguments to filter EksemplarBukus to delete.
     * @example
     * // Delete a few EksemplarBukus
     * const { count } = await prisma.eksemplarBuku.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EksemplarBukuDeleteManyArgs>(args?: SelectSubset<T, EksemplarBukuDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EksemplarBukus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EksemplarBukuUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EksemplarBukus
     * const eksemplarBuku = await prisma.eksemplarBuku.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EksemplarBukuUpdateManyArgs>(args: SelectSubset<T, EksemplarBukuUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EksemplarBukus and returns the data updated in the database.
     * @param {EksemplarBukuUpdateManyAndReturnArgs} args - Arguments to update many EksemplarBukus.
     * @example
     * // Update many EksemplarBukus
     * const eksemplarBuku = await prisma.eksemplarBuku.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EksemplarBukus and only return the `id`
     * const eksemplarBukuWithIdOnly = await prisma.eksemplarBuku.updateManyAndReturn({
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
    updateManyAndReturn<T extends EksemplarBukuUpdateManyAndReturnArgs>(args: SelectSubset<T, EksemplarBukuUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EksemplarBukuPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one EksemplarBuku.
     * @param {EksemplarBukuUpsertArgs} args - Arguments to update or create a EksemplarBuku.
     * @example
     * // Update or create a EksemplarBuku
     * const eksemplarBuku = await prisma.eksemplarBuku.upsert({
     *   create: {
     *     // ... data to create a EksemplarBuku
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EksemplarBuku we want to update
     *   }
     * })
     */
    upsert<T extends EksemplarBukuUpsertArgs>(args: SelectSubset<T, EksemplarBukuUpsertArgs<ExtArgs>>): Prisma__EksemplarBukuClient<$Result.GetResult<Prisma.$EksemplarBukuPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EksemplarBukus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EksemplarBukuCountArgs} args - Arguments to filter EksemplarBukus to count.
     * @example
     * // Count the number of EksemplarBukus
     * const count = await prisma.eksemplarBuku.count({
     *   where: {
     *     // ... the filter for the EksemplarBukus we want to count
     *   }
     * })
    **/
    count<T extends EksemplarBukuCountArgs>(
      args?: Subset<T, EksemplarBukuCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EksemplarBukuCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EksemplarBuku.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EksemplarBukuAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EksemplarBukuAggregateArgs>(args: Subset<T, EksemplarBukuAggregateArgs>): Prisma.PrismaPromise<GetEksemplarBukuAggregateType<T>>

    /**
     * Group by EksemplarBuku.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EksemplarBukuGroupByArgs} args - Group by arguments.
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
      T extends EksemplarBukuGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EksemplarBukuGroupByArgs['orderBy'] }
        : { orderBy?: EksemplarBukuGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EksemplarBukuGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEksemplarBukuGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EksemplarBuku model
   */
  readonly fields: EksemplarBukuFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EksemplarBuku.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EksemplarBukuClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    buku<T extends BukuDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BukuDefaultArgs<ExtArgs>>): Prisma__BukuClient<$Result.GetResult<Prisma.$BukuPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    peminjaman<T extends EksemplarBuku$peminjamanArgs<ExtArgs> = {}>(args?: Subset<T, EksemplarBuku$peminjamanArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PeminjamanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the EksemplarBuku model
   */
  interface EksemplarBukuFieldRefs {
    readonly id: FieldRef<"EksemplarBuku", 'Int'>
    readonly kodeEksemplar: FieldRef<"EksemplarBuku", 'String'>
    readonly bukuId: FieldRef<"EksemplarBuku", 'Int'>
    readonly status: FieldRef<"EksemplarBuku", 'Status'>
    readonly isArchived: FieldRef<"EksemplarBuku", 'Boolean'>
    readonly createdAt: FieldRef<"EksemplarBuku", 'DateTime'>
    readonly updatedAt: FieldRef<"EksemplarBuku", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * EksemplarBuku findUnique
   */
  export type EksemplarBukuFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EksemplarBuku
     */
    select?: EksemplarBukuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EksemplarBuku
     */
    omit?: EksemplarBukuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EksemplarBukuInclude<ExtArgs> | null
    /**
     * Filter, which EksemplarBuku to fetch.
     */
    where: EksemplarBukuWhereUniqueInput
  }

  /**
   * EksemplarBuku findUniqueOrThrow
   */
  export type EksemplarBukuFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EksemplarBuku
     */
    select?: EksemplarBukuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EksemplarBuku
     */
    omit?: EksemplarBukuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EksemplarBukuInclude<ExtArgs> | null
    /**
     * Filter, which EksemplarBuku to fetch.
     */
    where: EksemplarBukuWhereUniqueInput
  }

  /**
   * EksemplarBuku findFirst
   */
  export type EksemplarBukuFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EksemplarBuku
     */
    select?: EksemplarBukuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EksemplarBuku
     */
    omit?: EksemplarBukuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EksemplarBukuInclude<ExtArgs> | null
    /**
     * Filter, which EksemplarBuku to fetch.
     */
    where?: EksemplarBukuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EksemplarBukus to fetch.
     */
    orderBy?: EksemplarBukuOrderByWithRelationInput | EksemplarBukuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EksemplarBukus.
     */
    cursor?: EksemplarBukuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EksemplarBukus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EksemplarBukus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EksemplarBukus.
     */
    distinct?: EksemplarBukuScalarFieldEnum | EksemplarBukuScalarFieldEnum[]
  }

  /**
   * EksemplarBuku findFirstOrThrow
   */
  export type EksemplarBukuFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EksemplarBuku
     */
    select?: EksemplarBukuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EksemplarBuku
     */
    omit?: EksemplarBukuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EksemplarBukuInclude<ExtArgs> | null
    /**
     * Filter, which EksemplarBuku to fetch.
     */
    where?: EksemplarBukuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EksemplarBukus to fetch.
     */
    orderBy?: EksemplarBukuOrderByWithRelationInput | EksemplarBukuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EksemplarBukus.
     */
    cursor?: EksemplarBukuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EksemplarBukus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EksemplarBukus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EksemplarBukus.
     */
    distinct?: EksemplarBukuScalarFieldEnum | EksemplarBukuScalarFieldEnum[]
  }

  /**
   * EksemplarBuku findMany
   */
  export type EksemplarBukuFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EksemplarBuku
     */
    select?: EksemplarBukuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EksemplarBuku
     */
    omit?: EksemplarBukuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EksemplarBukuInclude<ExtArgs> | null
    /**
     * Filter, which EksemplarBukus to fetch.
     */
    where?: EksemplarBukuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EksemplarBukus to fetch.
     */
    orderBy?: EksemplarBukuOrderByWithRelationInput | EksemplarBukuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EksemplarBukus.
     */
    cursor?: EksemplarBukuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EksemplarBukus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EksemplarBukus.
     */
    skip?: number
    distinct?: EksemplarBukuScalarFieldEnum | EksemplarBukuScalarFieldEnum[]
  }

  /**
   * EksemplarBuku create
   */
  export type EksemplarBukuCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EksemplarBuku
     */
    select?: EksemplarBukuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EksemplarBuku
     */
    omit?: EksemplarBukuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EksemplarBukuInclude<ExtArgs> | null
    /**
     * The data needed to create a EksemplarBuku.
     */
    data: XOR<EksemplarBukuCreateInput, EksemplarBukuUncheckedCreateInput>
  }

  /**
   * EksemplarBuku createMany
   */
  export type EksemplarBukuCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EksemplarBukus.
     */
    data: EksemplarBukuCreateManyInput | EksemplarBukuCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EksemplarBuku createManyAndReturn
   */
  export type EksemplarBukuCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EksemplarBuku
     */
    select?: EksemplarBukuSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EksemplarBuku
     */
    omit?: EksemplarBukuOmit<ExtArgs> | null
    /**
     * The data used to create many EksemplarBukus.
     */
    data: EksemplarBukuCreateManyInput | EksemplarBukuCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EksemplarBukuIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * EksemplarBuku update
   */
  export type EksemplarBukuUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EksemplarBuku
     */
    select?: EksemplarBukuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EksemplarBuku
     */
    omit?: EksemplarBukuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EksemplarBukuInclude<ExtArgs> | null
    /**
     * The data needed to update a EksemplarBuku.
     */
    data: XOR<EksemplarBukuUpdateInput, EksemplarBukuUncheckedUpdateInput>
    /**
     * Choose, which EksemplarBuku to update.
     */
    where: EksemplarBukuWhereUniqueInput
  }

  /**
   * EksemplarBuku updateMany
   */
  export type EksemplarBukuUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EksemplarBukus.
     */
    data: XOR<EksemplarBukuUpdateManyMutationInput, EksemplarBukuUncheckedUpdateManyInput>
    /**
     * Filter which EksemplarBukus to update
     */
    where?: EksemplarBukuWhereInput
    /**
     * Limit how many EksemplarBukus to update.
     */
    limit?: number
  }

  /**
   * EksemplarBuku updateManyAndReturn
   */
  export type EksemplarBukuUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EksemplarBuku
     */
    select?: EksemplarBukuSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EksemplarBuku
     */
    omit?: EksemplarBukuOmit<ExtArgs> | null
    /**
     * The data used to update EksemplarBukus.
     */
    data: XOR<EksemplarBukuUpdateManyMutationInput, EksemplarBukuUncheckedUpdateManyInput>
    /**
     * Filter which EksemplarBukus to update
     */
    where?: EksemplarBukuWhereInput
    /**
     * Limit how many EksemplarBukus to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EksemplarBukuIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * EksemplarBuku upsert
   */
  export type EksemplarBukuUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EksemplarBuku
     */
    select?: EksemplarBukuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EksemplarBuku
     */
    omit?: EksemplarBukuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EksemplarBukuInclude<ExtArgs> | null
    /**
     * The filter to search for the EksemplarBuku to update in case it exists.
     */
    where: EksemplarBukuWhereUniqueInput
    /**
     * In case the EksemplarBuku found by the `where` argument doesn't exist, create a new EksemplarBuku with this data.
     */
    create: XOR<EksemplarBukuCreateInput, EksemplarBukuUncheckedCreateInput>
    /**
     * In case the EksemplarBuku was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EksemplarBukuUpdateInput, EksemplarBukuUncheckedUpdateInput>
  }

  /**
   * EksemplarBuku delete
   */
  export type EksemplarBukuDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EksemplarBuku
     */
    select?: EksemplarBukuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EksemplarBuku
     */
    omit?: EksemplarBukuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EksemplarBukuInclude<ExtArgs> | null
    /**
     * Filter which EksemplarBuku to delete.
     */
    where: EksemplarBukuWhereUniqueInput
  }

  /**
   * EksemplarBuku deleteMany
   */
  export type EksemplarBukuDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EksemplarBukus to delete
     */
    where?: EksemplarBukuWhereInput
    /**
     * Limit how many EksemplarBukus to delete.
     */
    limit?: number
  }

  /**
   * EksemplarBuku.peminjaman
   */
  export type EksemplarBuku$peminjamanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Peminjaman
     */
    select?: PeminjamanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Peminjaman
     */
    omit?: PeminjamanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeminjamanInclude<ExtArgs> | null
    where?: PeminjamanWhereInput
    orderBy?: PeminjamanOrderByWithRelationInput | PeminjamanOrderByWithRelationInput[]
    cursor?: PeminjamanWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PeminjamanScalarFieldEnum | PeminjamanScalarFieldEnum[]
  }

  /**
   * EksemplarBuku without action
   */
  export type EksemplarBukuDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EksemplarBuku
     */
    select?: EksemplarBukuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EksemplarBuku
     */
    omit?: EksemplarBukuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EksemplarBukuInclude<ExtArgs> | null
  }


  /**
   * Model Peminjaman
   */

  export type AggregatePeminjaman = {
    _count: PeminjamanCountAggregateOutputType | null
    _avg: PeminjamanAvgAggregateOutputType | null
    _sum: PeminjamanSumAggregateOutputType | null
    _min: PeminjamanMinAggregateOutputType | null
    _max: PeminjamanMaxAggregateOutputType | null
  }

  export type PeminjamanAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    eksemplarId: number | null
  }

  export type PeminjamanSumAggregateOutputType = {
    id: number | null
    userId: number | null
    eksemplarId: number | null
  }

  export type PeminjamanMinAggregateOutputType = {
    id: number | null
    userId: number | null
    eksemplarId: number | null
    tanggalPinjam: Date | null
    tanggalKembali: Date | null
    status: $Enums.Status | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PeminjamanMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    eksemplarId: number | null
    tanggalPinjam: Date | null
    tanggalKembali: Date | null
    status: $Enums.Status | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PeminjamanCountAggregateOutputType = {
    id: number
    userId: number
    eksemplarId: number
    tanggalPinjam: number
    tanggalKembali: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PeminjamanAvgAggregateInputType = {
    id?: true
    userId?: true
    eksemplarId?: true
  }

  export type PeminjamanSumAggregateInputType = {
    id?: true
    userId?: true
    eksemplarId?: true
  }

  export type PeminjamanMinAggregateInputType = {
    id?: true
    userId?: true
    eksemplarId?: true
    tanggalPinjam?: true
    tanggalKembali?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PeminjamanMaxAggregateInputType = {
    id?: true
    userId?: true
    eksemplarId?: true
    tanggalPinjam?: true
    tanggalKembali?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PeminjamanCountAggregateInputType = {
    id?: true
    userId?: true
    eksemplarId?: true
    tanggalPinjam?: true
    tanggalKembali?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PeminjamanAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Peminjaman to aggregate.
     */
    where?: PeminjamanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Peminjamen to fetch.
     */
    orderBy?: PeminjamanOrderByWithRelationInput | PeminjamanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PeminjamanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Peminjamen from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Peminjamen.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Peminjamen
    **/
    _count?: true | PeminjamanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PeminjamanAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PeminjamanSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PeminjamanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PeminjamanMaxAggregateInputType
  }

  export type GetPeminjamanAggregateType<T extends PeminjamanAggregateArgs> = {
        [P in keyof T & keyof AggregatePeminjaman]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePeminjaman[P]>
      : GetScalarType<T[P], AggregatePeminjaman[P]>
  }




  export type PeminjamanGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PeminjamanWhereInput
    orderBy?: PeminjamanOrderByWithAggregationInput | PeminjamanOrderByWithAggregationInput[]
    by: PeminjamanScalarFieldEnum[] | PeminjamanScalarFieldEnum
    having?: PeminjamanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PeminjamanCountAggregateInputType | true
    _avg?: PeminjamanAvgAggregateInputType
    _sum?: PeminjamanSumAggregateInputType
    _min?: PeminjamanMinAggregateInputType
    _max?: PeminjamanMaxAggregateInputType
  }

  export type PeminjamanGroupByOutputType = {
    id: number
    userId: number
    eksemplarId: number
    tanggalPinjam: Date
    tanggalKembali: Date
    status: $Enums.Status
    createdAt: Date
    updatedAt: Date
    _count: PeminjamanCountAggregateOutputType | null
    _avg: PeminjamanAvgAggregateOutputType | null
    _sum: PeminjamanSumAggregateOutputType | null
    _min: PeminjamanMinAggregateOutputType | null
    _max: PeminjamanMaxAggregateOutputType | null
  }

  type GetPeminjamanGroupByPayload<T extends PeminjamanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PeminjamanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PeminjamanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PeminjamanGroupByOutputType[P]>
            : GetScalarType<T[P], PeminjamanGroupByOutputType[P]>
        }
      >
    >


  export type PeminjamanSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    eksemplarId?: boolean
    tanggalPinjam?: boolean
    tanggalKembali?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    eksemplar?: boolean | EksemplarBukuDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["peminjaman"]>

  export type PeminjamanSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    eksemplarId?: boolean
    tanggalPinjam?: boolean
    tanggalKembali?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    eksemplar?: boolean | EksemplarBukuDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["peminjaman"]>

  export type PeminjamanSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    eksemplarId?: boolean
    tanggalPinjam?: boolean
    tanggalKembali?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    eksemplar?: boolean | EksemplarBukuDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["peminjaman"]>

  export type PeminjamanSelectScalar = {
    id?: boolean
    userId?: boolean
    eksemplarId?: boolean
    tanggalPinjam?: boolean
    tanggalKembali?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PeminjamanOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "eksemplarId" | "tanggalPinjam" | "tanggalKembali" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["peminjaman"]>
  export type PeminjamanInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    eksemplar?: boolean | EksemplarBukuDefaultArgs<ExtArgs>
  }
  export type PeminjamanIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    eksemplar?: boolean | EksemplarBukuDefaultArgs<ExtArgs>
  }
  export type PeminjamanIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    eksemplar?: boolean | EksemplarBukuDefaultArgs<ExtArgs>
  }

  export type $PeminjamanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Peminjaman"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      eksemplar: Prisma.$EksemplarBukuPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      eksemplarId: number
      tanggalPinjam: Date
      tanggalKembali: Date
      status: $Enums.Status
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["peminjaman"]>
    composites: {}
  }

  type PeminjamanGetPayload<S extends boolean | null | undefined | PeminjamanDefaultArgs> = $Result.GetResult<Prisma.$PeminjamanPayload, S>

  type PeminjamanCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PeminjamanFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PeminjamanCountAggregateInputType | true
    }

  export interface PeminjamanDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Peminjaman'], meta: { name: 'Peminjaman' } }
    /**
     * Find zero or one Peminjaman that matches the filter.
     * @param {PeminjamanFindUniqueArgs} args - Arguments to find a Peminjaman
     * @example
     * // Get one Peminjaman
     * const peminjaman = await prisma.peminjaman.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PeminjamanFindUniqueArgs>(args: SelectSubset<T, PeminjamanFindUniqueArgs<ExtArgs>>): Prisma__PeminjamanClient<$Result.GetResult<Prisma.$PeminjamanPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Peminjaman that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PeminjamanFindUniqueOrThrowArgs} args - Arguments to find a Peminjaman
     * @example
     * // Get one Peminjaman
     * const peminjaman = await prisma.peminjaman.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PeminjamanFindUniqueOrThrowArgs>(args: SelectSubset<T, PeminjamanFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PeminjamanClient<$Result.GetResult<Prisma.$PeminjamanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Peminjaman that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeminjamanFindFirstArgs} args - Arguments to find a Peminjaman
     * @example
     * // Get one Peminjaman
     * const peminjaman = await prisma.peminjaman.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PeminjamanFindFirstArgs>(args?: SelectSubset<T, PeminjamanFindFirstArgs<ExtArgs>>): Prisma__PeminjamanClient<$Result.GetResult<Prisma.$PeminjamanPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Peminjaman that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeminjamanFindFirstOrThrowArgs} args - Arguments to find a Peminjaman
     * @example
     * // Get one Peminjaman
     * const peminjaman = await prisma.peminjaman.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PeminjamanFindFirstOrThrowArgs>(args?: SelectSubset<T, PeminjamanFindFirstOrThrowArgs<ExtArgs>>): Prisma__PeminjamanClient<$Result.GetResult<Prisma.$PeminjamanPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Peminjamen that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeminjamanFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Peminjamen
     * const peminjamen = await prisma.peminjaman.findMany()
     * 
     * // Get first 10 Peminjamen
     * const peminjamen = await prisma.peminjaman.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const peminjamanWithIdOnly = await prisma.peminjaman.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PeminjamanFindManyArgs>(args?: SelectSubset<T, PeminjamanFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PeminjamanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Peminjaman.
     * @param {PeminjamanCreateArgs} args - Arguments to create a Peminjaman.
     * @example
     * // Create one Peminjaman
     * const Peminjaman = await prisma.peminjaman.create({
     *   data: {
     *     // ... data to create a Peminjaman
     *   }
     * })
     * 
     */
    create<T extends PeminjamanCreateArgs>(args: SelectSubset<T, PeminjamanCreateArgs<ExtArgs>>): Prisma__PeminjamanClient<$Result.GetResult<Prisma.$PeminjamanPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Peminjamen.
     * @param {PeminjamanCreateManyArgs} args - Arguments to create many Peminjamen.
     * @example
     * // Create many Peminjamen
     * const peminjaman = await prisma.peminjaman.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PeminjamanCreateManyArgs>(args?: SelectSubset<T, PeminjamanCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Peminjamen and returns the data saved in the database.
     * @param {PeminjamanCreateManyAndReturnArgs} args - Arguments to create many Peminjamen.
     * @example
     * // Create many Peminjamen
     * const peminjaman = await prisma.peminjaman.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Peminjamen and only return the `id`
     * const peminjamanWithIdOnly = await prisma.peminjaman.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PeminjamanCreateManyAndReturnArgs>(args?: SelectSubset<T, PeminjamanCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PeminjamanPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Peminjaman.
     * @param {PeminjamanDeleteArgs} args - Arguments to delete one Peminjaman.
     * @example
     * // Delete one Peminjaman
     * const Peminjaman = await prisma.peminjaman.delete({
     *   where: {
     *     // ... filter to delete one Peminjaman
     *   }
     * })
     * 
     */
    delete<T extends PeminjamanDeleteArgs>(args: SelectSubset<T, PeminjamanDeleteArgs<ExtArgs>>): Prisma__PeminjamanClient<$Result.GetResult<Prisma.$PeminjamanPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Peminjaman.
     * @param {PeminjamanUpdateArgs} args - Arguments to update one Peminjaman.
     * @example
     * // Update one Peminjaman
     * const peminjaman = await prisma.peminjaman.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PeminjamanUpdateArgs>(args: SelectSubset<T, PeminjamanUpdateArgs<ExtArgs>>): Prisma__PeminjamanClient<$Result.GetResult<Prisma.$PeminjamanPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Peminjamen.
     * @param {PeminjamanDeleteManyArgs} args - Arguments to filter Peminjamen to delete.
     * @example
     * // Delete a few Peminjamen
     * const { count } = await prisma.peminjaman.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PeminjamanDeleteManyArgs>(args?: SelectSubset<T, PeminjamanDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Peminjamen.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeminjamanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Peminjamen
     * const peminjaman = await prisma.peminjaman.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PeminjamanUpdateManyArgs>(args: SelectSubset<T, PeminjamanUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Peminjamen and returns the data updated in the database.
     * @param {PeminjamanUpdateManyAndReturnArgs} args - Arguments to update many Peminjamen.
     * @example
     * // Update many Peminjamen
     * const peminjaman = await prisma.peminjaman.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Peminjamen and only return the `id`
     * const peminjamanWithIdOnly = await prisma.peminjaman.updateManyAndReturn({
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
    updateManyAndReturn<T extends PeminjamanUpdateManyAndReturnArgs>(args: SelectSubset<T, PeminjamanUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PeminjamanPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Peminjaman.
     * @param {PeminjamanUpsertArgs} args - Arguments to update or create a Peminjaman.
     * @example
     * // Update or create a Peminjaman
     * const peminjaman = await prisma.peminjaman.upsert({
     *   create: {
     *     // ... data to create a Peminjaman
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Peminjaman we want to update
     *   }
     * })
     */
    upsert<T extends PeminjamanUpsertArgs>(args: SelectSubset<T, PeminjamanUpsertArgs<ExtArgs>>): Prisma__PeminjamanClient<$Result.GetResult<Prisma.$PeminjamanPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Peminjamen.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeminjamanCountArgs} args - Arguments to filter Peminjamen to count.
     * @example
     * // Count the number of Peminjamen
     * const count = await prisma.peminjaman.count({
     *   where: {
     *     // ... the filter for the Peminjamen we want to count
     *   }
     * })
    **/
    count<T extends PeminjamanCountArgs>(
      args?: Subset<T, PeminjamanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PeminjamanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Peminjaman.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeminjamanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PeminjamanAggregateArgs>(args: Subset<T, PeminjamanAggregateArgs>): Prisma.PrismaPromise<GetPeminjamanAggregateType<T>>

    /**
     * Group by Peminjaman.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeminjamanGroupByArgs} args - Group by arguments.
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
      T extends PeminjamanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PeminjamanGroupByArgs['orderBy'] }
        : { orderBy?: PeminjamanGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PeminjamanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPeminjamanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Peminjaman model
   */
  readonly fields: PeminjamanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Peminjaman.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PeminjamanClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    eksemplar<T extends EksemplarBukuDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EksemplarBukuDefaultArgs<ExtArgs>>): Prisma__EksemplarBukuClient<$Result.GetResult<Prisma.$EksemplarBukuPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Peminjaman model
   */
  interface PeminjamanFieldRefs {
    readonly id: FieldRef<"Peminjaman", 'Int'>
    readonly userId: FieldRef<"Peminjaman", 'Int'>
    readonly eksemplarId: FieldRef<"Peminjaman", 'Int'>
    readonly tanggalPinjam: FieldRef<"Peminjaman", 'DateTime'>
    readonly tanggalKembali: FieldRef<"Peminjaman", 'DateTime'>
    readonly status: FieldRef<"Peminjaman", 'Status'>
    readonly createdAt: FieldRef<"Peminjaman", 'DateTime'>
    readonly updatedAt: FieldRef<"Peminjaman", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Peminjaman findUnique
   */
  export type PeminjamanFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Peminjaman
     */
    select?: PeminjamanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Peminjaman
     */
    omit?: PeminjamanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeminjamanInclude<ExtArgs> | null
    /**
     * Filter, which Peminjaman to fetch.
     */
    where: PeminjamanWhereUniqueInput
  }

  /**
   * Peminjaman findUniqueOrThrow
   */
  export type PeminjamanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Peminjaman
     */
    select?: PeminjamanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Peminjaman
     */
    omit?: PeminjamanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeminjamanInclude<ExtArgs> | null
    /**
     * Filter, which Peminjaman to fetch.
     */
    where: PeminjamanWhereUniqueInput
  }

  /**
   * Peminjaman findFirst
   */
  export type PeminjamanFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Peminjaman
     */
    select?: PeminjamanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Peminjaman
     */
    omit?: PeminjamanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeminjamanInclude<ExtArgs> | null
    /**
     * Filter, which Peminjaman to fetch.
     */
    where?: PeminjamanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Peminjamen to fetch.
     */
    orderBy?: PeminjamanOrderByWithRelationInput | PeminjamanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Peminjamen.
     */
    cursor?: PeminjamanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Peminjamen from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Peminjamen.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Peminjamen.
     */
    distinct?: PeminjamanScalarFieldEnum | PeminjamanScalarFieldEnum[]
  }

  /**
   * Peminjaman findFirstOrThrow
   */
  export type PeminjamanFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Peminjaman
     */
    select?: PeminjamanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Peminjaman
     */
    omit?: PeminjamanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeminjamanInclude<ExtArgs> | null
    /**
     * Filter, which Peminjaman to fetch.
     */
    where?: PeminjamanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Peminjamen to fetch.
     */
    orderBy?: PeminjamanOrderByWithRelationInput | PeminjamanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Peminjamen.
     */
    cursor?: PeminjamanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Peminjamen from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Peminjamen.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Peminjamen.
     */
    distinct?: PeminjamanScalarFieldEnum | PeminjamanScalarFieldEnum[]
  }

  /**
   * Peminjaman findMany
   */
  export type PeminjamanFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Peminjaman
     */
    select?: PeminjamanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Peminjaman
     */
    omit?: PeminjamanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeminjamanInclude<ExtArgs> | null
    /**
     * Filter, which Peminjamen to fetch.
     */
    where?: PeminjamanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Peminjamen to fetch.
     */
    orderBy?: PeminjamanOrderByWithRelationInput | PeminjamanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Peminjamen.
     */
    cursor?: PeminjamanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Peminjamen from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Peminjamen.
     */
    skip?: number
    distinct?: PeminjamanScalarFieldEnum | PeminjamanScalarFieldEnum[]
  }

  /**
   * Peminjaman create
   */
  export type PeminjamanCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Peminjaman
     */
    select?: PeminjamanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Peminjaman
     */
    omit?: PeminjamanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeminjamanInclude<ExtArgs> | null
    /**
     * The data needed to create a Peminjaman.
     */
    data: XOR<PeminjamanCreateInput, PeminjamanUncheckedCreateInput>
  }

  /**
   * Peminjaman createMany
   */
  export type PeminjamanCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Peminjamen.
     */
    data: PeminjamanCreateManyInput | PeminjamanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Peminjaman createManyAndReturn
   */
  export type PeminjamanCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Peminjaman
     */
    select?: PeminjamanSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Peminjaman
     */
    omit?: PeminjamanOmit<ExtArgs> | null
    /**
     * The data used to create many Peminjamen.
     */
    data: PeminjamanCreateManyInput | PeminjamanCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeminjamanIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Peminjaman update
   */
  export type PeminjamanUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Peminjaman
     */
    select?: PeminjamanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Peminjaman
     */
    omit?: PeminjamanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeminjamanInclude<ExtArgs> | null
    /**
     * The data needed to update a Peminjaman.
     */
    data: XOR<PeminjamanUpdateInput, PeminjamanUncheckedUpdateInput>
    /**
     * Choose, which Peminjaman to update.
     */
    where: PeminjamanWhereUniqueInput
  }

  /**
   * Peminjaman updateMany
   */
  export type PeminjamanUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Peminjamen.
     */
    data: XOR<PeminjamanUpdateManyMutationInput, PeminjamanUncheckedUpdateManyInput>
    /**
     * Filter which Peminjamen to update
     */
    where?: PeminjamanWhereInput
    /**
     * Limit how many Peminjamen to update.
     */
    limit?: number
  }

  /**
   * Peminjaman updateManyAndReturn
   */
  export type PeminjamanUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Peminjaman
     */
    select?: PeminjamanSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Peminjaman
     */
    omit?: PeminjamanOmit<ExtArgs> | null
    /**
     * The data used to update Peminjamen.
     */
    data: XOR<PeminjamanUpdateManyMutationInput, PeminjamanUncheckedUpdateManyInput>
    /**
     * Filter which Peminjamen to update
     */
    where?: PeminjamanWhereInput
    /**
     * Limit how many Peminjamen to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeminjamanIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Peminjaman upsert
   */
  export type PeminjamanUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Peminjaman
     */
    select?: PeminjamanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Peminjaman
     */
    omit?: PeminjamanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeminjamanInclude<ExtArgs> | null
    /**
     * The filter to search for the Peminjaman to update in case it exists.
     */
    where: PeminjamanWhereUniqueInput
    /**
     * In case the Peminjaman found by the `where` argument doesn't exist, create a new Peminjaman with this data.
     */
    create: XOR<PeminjamanCreateInput, PeminjamanUncheckedCreateInput>
    /**
     * In case the Peminjaman was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PeminjamanUpdateInput, PeminjamanUncheckedUpdateInput>
  }

  /**
   * Peminjaman delete
   */
  export type PeminjamanDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Peminjaman
     */
    select?: PeminjamanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Peminjaman
     */
    omit?: PeminjamanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeminjamanInclude<ExtArgs> | null
    /**
     * Filter which Peminjaman to delete.
     */
    where: PeminjamanWhereUniqueInput
  }

  /**
   * Peminjaman deleteMany
   */
  export type PeminjamanDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Peminjamen to delete
     */
    where?: PeminjamanWhereInput
    /**
     * Limit how many Peminjamen to delete.
     */
    limit?: number
  }

  /**
   * Peminjaman without action
   */
  export type PeminjamanDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Peminjaman
     */
    select?: PeminjamanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Peminjaman
     */
    omit?: PeminjamanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeminjamanInclude<ExtArgs> | null
  }


  /**
   * Model BukuKategori
   */

  export type AggregateBukuKategori = {
    _count: BukuKategoriCountAggregateOutputType | null
    _avg: BukuKategoriAvgAggregateOutputType | null
    _sum: BukuKategoriSumAggregateOutputType | null
    _min: BukuKategoriMinAggregateOutputType | null
    _max: BukuKategoriMaxAggregateOutputType | null
  }

  export type BukuKategoriAvgAggregateOutputType = {
    id: number | null
    idBuku: number | null
    kategoriId: number | null
  }

  export type BukuKategoriSumAggregateOutputType = {
    id: number | null
    idBuku: number | null
    kategoriId: number | null
  }

  export type BukuKategoriMinAggregateOutputType = {
    id: number | null
    idBuku: number | null
    kategoriId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BukuKategoriMaxAggregateOutputType = {
    id: number | null
    idBuku: number | null
    kategoriId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BukuKategoriCountAggregateOutputType = {
    id: number
    idBuku: number
    kategoriId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BukuKategoriAvgAggregateInputType = {
    id?: true
    idBuku?: true
    kategoriId?: true
  }

  export type BukuKategoriSumAggregateInputType = {
    id?: true
    idBuku?: true
    kategoriId?: true
  }

  export type BukuKategoriMinAggregateInputType = {
    id?: true
    idBuku?: true
    kategoriId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BukuKategoriMaxAggregateInputType = {
    id?: true
    idBuku?: true
    kategoriId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BukuKategoriCountAggregateInputType = {
    id?: true
    idBuku?: true
    kategoriId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BukuKategoriAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BukuKategori to aggregate.
     */
    where?: BukuKategoriWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BukuKategoris to fetch.
     */
    orderBy?: BukuKategoriOrderByWithRelationInput | BukuKategoriOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BukuKategoriWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BukuKategoris from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BukuKategoris.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BukuKategoris
    **/
    _count?: true | BukuKategoriCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BukuKategoriAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BukuKategoriSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BukuKategoriMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BukuKategoriMaxAggregateInputType
  }

  export type GetBukuKategoriAggregateType<T extends BukuKategoriAggregateArgs> = {
        [P in keyof T & keyof AggregateBukuKategori]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBukuKategori[P]>
      : GetScalarType<T[P], AggregateBukuKategori[P]>
  }




  export type BukuKategoriGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BukuKategoriWhereInput
    orderBy?: BukuKategoriOrderByWithAggregationInput | BukuKategoriOrderByWithAggregationInput[]
    by: BukuKategoriScalarFieldEnum[] | BukuKategoriScalarFieldEnum
    having?: BukuKategoriScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BukuKategoriCountAggregateInputType | true
    _avg?: BukuKategoriAvgAggregateInputType
    _sum?: BukuKategoriSumAggregateInputType
    _min?: BukuKategoriMinAggregateInputType
    _max?: BukuKategoriMaxAggregateInputType
  }

  export type BukuKategoriGroupByOutputType = {
    id: number
    idBuku: number
    kategoriId: number
    createdAt: Date
    updatedAt: Date
    _count: BukuKategoriCountAggregateOutputType | null
    _avg: BukuKategoriAvgAggregateOutputType | null
    _sum: BukuKategoriSumAggregateOutputType | null
    _min: BukuKategoriMinAggregateOutputType | null
    _max: BukuKategoriMaxAggregateOutputType | null
  }

  type GetBukuKategoriGroupByPayload<T extends BukuKategoriGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BukuKategoriGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BukuKategoriGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BukuKategoriGroupByOutputType[P]>
            : GetScalarType<T[P], BukuKategoriGroupByOutputType[P]>
        }
      >
    >


  export type BukuKategoriSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    idBuku?: boolean
    kategoriId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    buku?: boolean | BukuDefaultArgs<ExtArgs>
    kategori?: boolean | KategoriDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bukuKategori"]>

  export type BukuKategoriSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    idBuku?: boolean
    kategoriId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    buku?: boolean | BukuDefaultArgs<ExtArgs>
    kategori?: boolean | KategoriDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bukuKategori"]>

  export type BukuKategoriSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    idBuku?: boolean
    kategoriId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    buku?: boolean | BukuDefaultArgs<ExtArgs>
    kategori?: boolean | KategoriDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bukuKategori"]>

  export type BukuKategoriSelectScalar = {
    id?: boolean
    idBuku?: boolean
    kategoriId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BukuKategoriOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "idBuku" | "kategoriId" | "createdAt" | "updatedAt", ExtArgs["result"]["bukuKategori"]>
  export type BukuKategoriInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    buku?: boolean | BukuDefaultArgs<ExtArgs>
    kategori?: boolean | KategoriDefaultArgs<ExtArgs>
  }
  export type BukuKategoriIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    buku?: boolean | BukuDefaultArgs<ExtArgs>
    kategori?: boolean | KategoriDefaultArgs<ExtArgs>
  }
  export type BukuKategoriIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    buku?: boolean | BukuDefaultArgs<ExtArgs>
    kategori?: boolean | KategoriDefaultArgs<ExtArgs>
  }

  export type $BukuKategoriPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BukuKategori"
    objects: {
      buku: Prisma.$BukuPayload<ExtArgs>
      kategori: Prisma.$KategoriPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      idBuku: number
      kategoriId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["bukuKategori"]>
    composites: {}
  }

  type BukuKategoriGetPayload<S extends boolean | null | undefined | BukuKategoriDefaultArgs> = $Result.GetResult<Prisma.$BukuKategoriPayload, S>

  type BukuKategoriCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BukuKategoriFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BukuKategoriCountAggregateInputType | true
    }

  export interface BukuKategoriDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BukuKategori'], meta: { name: 'BukuKategori' } }
    /**
     * Find zero or one BukuKategori that matches the filter.
     * @param {BukuKategoriFindUniqueArgs} args - Arguments to find a BukuKategori
     * @example
     * // Get one BukuKategori
     * const bukuKategori = await prisma.bukuKategori.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BukuKategoriFindUniqueArgs>(args: SelectSubset<T, BukuKategoriFindUniqueArgs<ExtArgs>>): Prisma__BukuKategoriClient<$Result.GetResult<Prisma.$BukuKategoriPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BukuKategori that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BukuKategoriFindUniqueOrThrowArgs} args - Arguments to find a BukuKategori
     * @example
     * // Get one BukuKategori
     * const bukuKategori = await prisma.bukuKategori.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BukuKategoriFindUniqueOrThrowArgs>(args: SelectSubset<T, BukuKategoriFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BukuKategoriClient<$Result.GetResult<Prisma.$BukuKategoriPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BukuKategori that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BukuKategoriFindFirstArgs} args - Arguments to find a BukuKategori
     * @example
     * // Get one BukuKategori
     * const bukuKategori = await prisma.bukuKategori.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BukuKategoriFindFirstArgs>(args?: SelectSubset<T, BukuKategoriFindFirstArgs<ExtArgs>>): Prisma__BukuKategoriClient<$Result.GetResult<Prisma.$BukuKategoriPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BukuKategori that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BukuKategoriFindFirstOrThrowArgs} args - Arguments to find a BukuKategori
     * @example
     * // Get one BukuKategori
     * const bukuKategori = await prisma.bukuKategori.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BukuKategoriFindFirstOrThrowArgs>(args?: SelectSubset<T, BukuKategoriFindFirstOrThrowArgs<ExtArgs>>): Prisma__BukuKategoriClient<$Result.GetResult<Prisma.$BukuKategoriPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BukuKategoris that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BukuKategoriFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BukuKategoris
     * const bukuKategoris = await prisma.bukuKategori.findMany()
     * 
     * // Get first 10 BukuKategoris
     * const bukuKategoris = await prisma.bukuKategori.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bukuKategoriWithIdOnly = await prisma.bukuKategori.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BukuKategoriFindManyArgs>(args?: SelectSubset<T, BukuKategoriFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BukuKategoriPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BukuKategori.
     * @param {BukuKategoriCreateArgs} args - Arguments to create a BukuKategori.
     * @example
     * // Create one BukuKategori
     * const BukuKategori = await prisma.bukuKategori.create({
     *   data: {
     *     // ... data to create a BukuKategori
     *   }
     * })
     * 
     */
    create<T extends BukuKategoriCreateArgs>(args: SelectSubset<T, BukuKategoriCreateArgs<ExtArgs>>): Prisma__BukuKategoriClient<$Result.GetResult<Prisma.$BukuKategoriPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BukuKategoris.
     * @param {BukuKategoriCreateManyArgs} args - Arguments to create many BukuKategoris.
     * @example
     * // Create many BukuKategoris
     * const bukuKategori = await prisma.bukuKategori.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BukuKategoriCreateManyArgs>(args?: SelectSubset<T, BukuKategoriCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BukuKategoris and returns the data saved in the database.
     * @param {BukuKategoriCreateManyAndReturnArgs} args - Arguments to create many BukuKategoris.
     * @example
     * // Create many BukuKategoris
     * const bukuKategori = await prisma.bukuKategori.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BukuKategoris and only return the `id`
     * const bukuKategoriWithIdOnly = await prisma.bukuKategori.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BukuKategoriCreateManyAndReturnArgs>(args?: SelectSubset<T, BukuKategoriCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BukuKategoriPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BukuKategori.
     * @param {BukuKategoriDeleteArgs} args - Arguments to delete one BukuKategori.
     * @example
     * // Delete one BukuKategori
     * const BukuKategori = await prisma.bukuKategori.delete({
     *   where: {
     *     // ... filter to delete one BukuKategori
     *   }
     * })
     * 
     */
    delete<T extends BukuKategoriDeleteArgs>(args: SelectSubset<T, BukuKategoriDeleteArgs<ExtArgs>>): Prisma__BukuKategoriClient<$Result.GetResult<Prisma.$BukuKategoriPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BukuKategori.
     * @param {BukuKategoriUpdateArgs} args - Arguments to update one BukuKategori.
     * @example
     * // Update one BukuKategori
     * const bukuKategori = await prisma.bukuKategori.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BukuKategoriUpdateArgs>(args: SelectSubset<T, BukuKategoriUpdateArgs<ExtArgs>>): Prisma__BukuKategoriClient<$Result.GetResult<Prisma.$BukuKategoriPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BukuKategoris.
     * @param {BukuKategoriDeleteManyArgs} args - Arguments to filter BukuKategoris to delete.
     * @example
     * // Delete a few BukuKategoris
     * const { count } = await prisma.bukuKategori.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BukuKategoriDeleteManyArgs>(args?: SelectSubset<T, BukuKategoriDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BukuKategoris.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BukuKategoriUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BukuKategoris
     * const bukuKategori = await prisma.bukuKategori.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BukuKategoriUpdateManyArgs>(args: SelectSubset<T, BukuKategoriUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BukuKategoris and returns the data updated in the database.
     * @param {BukuKategoriUpdateManyAndReturnArgs} args - Arguments to update many BukuKategoris.
     * @example
     * // Update many BukuKategoris
     * const bukuKategori = await prisma.bukuKategori.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BukuKategoris and only return the `id`
     * const bukuKategoriWithIdOnly = await prisma.bukuKategori.updateManyAndReturn({
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
    updateManyAndReturn<T extends BukuKategoriUpdateManyAndReturnArgs>(args: SelectSubset<T, BukuKategoriUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BukuKategoriPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BukuKategori.
     * @param {BukuKategoriUpsertArgs} args - Arguments to update or create a BukuKategori.
     * @example
     * // Update or create a BukuKategori
     * const bukuKategori = await prisma.bukuKategori.upsert({
     *   create: {
     *     // ... data to create a BukuKategori
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BukuKategori we want to update
     *   }
     * })
     */
    upsert<T extends BukuKategoriUpsertArgs>(args: SelectSubset<T, BukuKategoriUpsertArgs<ExtArgs>>): Prisma__BukuKategoriClient<$Result.GetResult<Prisma.$BukuKategoriPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BukuKategoris.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BukuKategoriCountArgs} args - Arguments to filter BukuKategoris to count.
     * @example
     * // Count the number of BukuKategoris
     * const count = await prisma.bukuKategori.count({
     *   where: {
     *     // ... the filter for the BukuKategoris we want to count
     *   }
     * })
    **/
    count<T extends BukuKategoriCountArgs>(
      args?: Subset<T, BukuKategoriCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BukuKategoriCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BukuKategori.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BukuKategoriAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BukuKategoriAggregateArgs>(args: Subset<T, BukuKategoriAggregateArgs>): Prisma.PrismaPromise<GetBukuKategoriAggregateType<T>>

    /**
     * Group by BukuKategori.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BukuKategoriGroupByArgs} args - Group by arguments.
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
      T extends BukuKategoriGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BukuKategoriGroupByArgs['orderBy'] }
        : { orderBy?: BukuKategoriGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BukuKategoriGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBukuKategoriGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BukuKategori model
   */
  readonly fields: BukuKategoriFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BukuKategori.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BukuKategoriClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    buku<T extends BukuDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BukuDefaultArgs<ExtArgs>>): Prisma__BukuClient<$Result.GetResult<Prisma.$BukuPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    kategori<T extends KategoriDefaultArgs<ExtArgs> = {}>(args?: Subset<T, KategoriDefaultArgs<ExtArgs>>): Prisma__KategoriClient<$Result.GetResult<Prisma.$KategoriPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the BukuKategori model
   */
  interface BukuKategoriFieldRefs {
    readonly id: FieldRef<"BukuKategori", 'Int'>
    readonly idBuku: FieldRef<"BukuKategori", 'Int'>
    readonly kategoriId: FieldRef<"BukuKategori", 'Int'>
    readonly createdAt: FieldRef<"BukuKategori", 'DateTime'>
    readonly updatedAt: FieldRef<"BukuKategori", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * BukuKategori findUnique
   */
  export type BukuKategoriFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BukuKategori
     */
    select?: BukuKategoriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BukuKategori
     */
    omit?: BukuKategoriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BukuKategoriInclude<ExtArgs> | null
    /**
     * Filter, which BukuKategori to fetch.
     */
    where: BukuKategoriWhereUniqueInput
  }

  /**
   * BukuKategori findUniqueOrThrow
   */
  export type BukuKategoriFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BukuKategori
     */
    select?: BukuKategoriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BukuKategori
     */
    omit?: BukuKategoriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BukuKategoriInclude<ExtArgs> | null
    /**
     * Filter, which BukuKategori to fetch.
     */
    where: BukuKategoriWhereUniqueInput
  }

  /**
   * BukuKategori findFirst
   */
  export type BukuKategoriFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BukuKategori
     */
    select?: BukuKategoriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BukuKategori
     */
    omit?: BukuKategoriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BukuKategoriInclude<ExtArgs> | null
    /**
     * Filter, which BukuKategori to fetch.
     */
    where?: BukuKategoriWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BukuKategoris to fetch.
     */
    orderBy?: BukuKategoriOrderByWithRelationInput | BukuKategoriOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BukuKategoris.
     */
    cursor?: BukuKategoriWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BukuKategoris from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BukuKategoris.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BukuKategoris.
     */
    distinct?: BukuKategoriScalarFieldEnum | BukuKategoriScalarFieldEnum[]
  }

  /**
   * BukuKategori findFirstOrThrow
   */
  export type BukuKategoriFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BukuKategori
     */
    select?: BukuKategoriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BukuKategori
     */
    omit?: BukuKategoriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BukuKategoriInclude<ExtArgs> | null
    /**
     * Filter, which BukuKategori to fetch.
     */
    where?: BukuKategoriWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BukuKategoris to fetch.
     */
    orderBy?: BukuKategoriOrderByWithRelationInput | BukuKategoriOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BukuKategoris.
     */
    cursor?: BukuKategoriWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BukuKategoris from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BukuKategoris.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BukuKategoris.
     */
    distinct?: BukuKategoriScalarFieldEnum | BukuKategoriScalarFieldEnum[]
  }

  /**
   * BukuKategori findMany
   */
  export type BukuKategoriFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BukuKategori
     */
    select?: BukuKategoriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BukuKategori
     */
    omit?: BukuKategoriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BukuKategoriInclude<ExtArgs> | null
    /**
     * Filter, which BukuKategoris to fetch.
     */
    where?: BukuKategoriWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BukuKategoris to fetch.
     */
    orderBy?: BukuKategoriOrderByWithRelationInput | BukuKategoriOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BukuKategoris.
     */
    cursor?: BukuKategoriWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BukuKategoris from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BukuKategoris.
     */
    skip?: number
    distinct?: BukuKategoriScalarFieldEnum | BukuKategoriScalarFieldEnum[]
  }

  /**
   * BukuKategori create
   */
  export type BukuKategoriCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BukuKategori
     */
    select?: BukuKategoriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BukuKategori
     */
    omit?: BukuKategoriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BukuKategoriInclude<ExtArgs> | null
    /**
     * The data needed to create a BukuKategori.
     */
    data: XOR<BukuKategoriCreateInput, BukuKategoriUncheckedCreateInput>
  }

  /**
   * BukuKategori createMany
   */
  export type BukuKategoriCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BukuKategoris.
     */
    data: BukuKategoriCreateManyInput | BukuKategoriCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BukuKategori createManyAndReturn
   */
  export type BukuKategoriCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BukuKategori
     */
    select?: BukuKategoriSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BukuKategori
     */
    omit?: BukuKategoriOmit<ExtArgs> | null
    /**
     * The data used to create many BukuKategoris.
     */
    data: BukuKategoriCreateManyInput | BukuKategoriCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BukuKategoriIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BukuKategori update
   */
  export type BukuKategoriUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BukuKategori
     */
    select?: BukuKategoriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BukuKategori
     */
    omit?: BukuKategoriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BukuKategoriInclude<ExtArgs> | null
    /**
     * The data needed to update a BukuKategori.
     */
    data: XOR<BukuKategoriUpdateInput, BukuKategoriUncheckedUpdateInput>
    /**
     * Choose, which BukuKategori to update.
     */
    where: BukuKategoriWhereUniqueInput
  }

  /**
   * BukuKategori updateMany
   */
  export type BukuKategoriUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BukuKategoris.
     */
    data: XOR<BukuKategoriUpdateManyMutationInput, BukuKategoriUncheckedUpdateManyInput>
    /**
     * Filter which BukuKategoris to update
     */
    where?: BukuKategoriWhereInput
    /**
     * Limit how many BukuKategoris to update.
     */
    limit?: number
  }

  /**
   * BukuKategori updateManyAndReturn
   */
  export type BukuKategoriUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BukuKategori
     */
    select?: BukuKategoriSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BukuKategori
     */
    omit?: BukuKategoriOmit<ExtArgs> | null
    /**
     * The data used to update BukuKategoris.
     */
    data: XOR<BukuKategoriUpdateManyMutationInput, BukuKategoriUncheckedUpdateManyInput>
    /**
     * Filter which BukuKategoris to update
     */
    where?: BukuKategoriWhereInput
    /**
     * Limit how many BukuKategoris to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BukuKategoriIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * BukuKategori upsert
   */
  export type BukuKategoriUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BukuKategori
     */
    select?: BukuKategoriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BukuKategori
     */
    omit?: BukuKategoriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BukuKategoriInclude<ExtArgs> | null
    /**
     * The filter to search for the BukuKategori to update in case it exists.
     */
    where: BukuKategoriWhereUniqueInput
    /**
     * In case the BukuKategori found by the `where` argument doesn't exist, create a new BukuKategori with this data.
     */
    create: XOR<BukuKategoriCreateInput, BukuKategoriUncheckedCreateInput>
    /**
     * In case the BukuKategori was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BukuKategoriUpdateInput, BukuKategoriUncheckedUpdateInput>
  }

  /**
   * BukuKategori delete
   */
  export type BukuKategoriDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BukuKategori
     */
    select?: BukuKategoriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BukuKategori
     */
    omit?: BukuKategoriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BukuKategoriInclude<ExtArgs> | null
    /**
     * Filter which BukuKategori to delete.
     */
    where: BukuKategoriWhereUniqueInput
  }

  /**
   * BukuKategori deleteMany
   */
  export type BukuKategoriDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BukuKategoris to delete
     */
    where?: BukuKategoriWhereInput
    /**
     * Limit how many BukuKategoris to delete.
     */
    limit?: number
  }

  /**
   * BukuKategori without action
   */
  export type BukuKategoriDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BukuKategori
     */
    select?: BukuKategoriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BukuKategori
     */
    omit?: BukuKategoriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BukuKategoriInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const BukuScalarFieldEnum: {
    id: 'id',
    judul: 'judul',
    pengarang: 'pengarang',
    penerbit: 'penerbit',
    tahunTerbit: 'tahunTerbit',
    jumlahBuku: 'jumlahBuku',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BukuScalarFieldEnum = (typeof BukuScalarFieldEnum)[keyof typeof BukuScalarFieldEnum]


  export const KategoriScalarFieldEnum: {
    id: 'id',
    nama: 'nama',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type KategoriScalarFieldEnum = (typeof KategoriScalarFieldEnum)[keyof typeof KategoriScalarFieldEnum]


  export const EksemplarBukuScalarFieldEnum: {
    id: 'id',
    kodeEksemplar: 'kodeEksemplar',
    bukuId: 'bukuId',
    status: 'status',
    isArchived: 'isArchived',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type EksemplarBukuScalarFieldEnum = (typeof EksemplarBukuScalarFieldEnum)[keyof typeof EksemplarBukuScalarFieldEnum]


  export const PeminjamanScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    eksemplarId: 'eksemplarId',
    tanggalPinjam: 'tanggalPinjam',
    tanggalKembali: 'tanggalKembali',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PeminjamanScalarFieldEnum = (typeof PeminjamanScalarFieldEnum)[keyof typeof PeminjamanScalarFieldEnum]


  export const BukuKategoriScalarFieldEnum: {
    id: 'id',
    idBuku: 'idBuku',
    kategoriId: 'kategoriId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BukuKategoriScalarFieldEnum = (typeof BukuKategoriScalarFieldEnum)[keyof typeof BukuKategoriScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Status'
   */
  export type EnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status'>
    


  /**
   * Reference to a field of type 'Status[]'
   */
  export type ListEnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    peminjaman?: PeminjamanListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    peminjaman?: PeminjamanOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    peminjaman?: PeminjamanListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type BukuWhereInput = {
    AND?: BukuWhereInput | BukuWhereInput[]
    OR?: BukuWhereInput[]
    NOT?: BukuWhereInput | BukuWhereInput[]
    id?: IntFilter<"Buku"> | number
    judul?: StringFilter<"Buku"> | string
    pengarang?: StringFilter<"Buku"> | string
    penerbit?: StringFilter<"Buku"> | string
    tahunTerbit?: IntFilter<"Buku"> | number
    jumlahBuku?: IntFilter<"Buku"> | number
    createdAt?: DateTimeFilter<"Buku"> | Date | string
    updatedAt?: DateTimeFilter<"Buku"> | Date | string
    eksemplarBuku?: EksemplarBukuListRelationFilter
    kategori?: BukuKategoriListRelationFilter
  }

  export type BukuOrderByWithRelationInput = {
    id?: SortOrder
    judul?: SortOrder
    pengarang?: SortOrder
    penerbit?: SortOrder
    tahunTerbit?: SortOrder
    jumlahBuku?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    eksemplarBuku?: EksemplarBukuOrderByRelationAggregateInput
    kategori?: BukuKategoriOrderByRelationAggregateInput
  }

  export type BukuWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: BukuWhereInput | BukuWhereInput[]
    OR?: BukuWhereInput[]
    NOT?: BukuWhereInput | BukuWhereInput[]
    judul?: StringFilter<"Buku"> | string
    pengarang?: StringFilter<"Buku"> | string
    penerbit?: StringFilter<"Buku"> | string
    tahunTerbit?: IntFilter<"Buku"> | number
    jumlahBuku?: IntFilter<"Buku"> | number
    createdAt?: DateTimeFilter<"Buku"> | Date | string
    updatedAt?: DateTimeFilter<"Buku"> | Date | string
    eksemplarBuku?: EksemplarBukuListRelationFilter
    kategori?: BukuKategoriListRelationFilter
  }, "id">

  export type BukuOrderByWithAggregationInput = {
    id?: SortOrder
    judul?: SortOrder
    pengarang?: SortOrder
    penerbit?: SortOrder
    tahunTerbit?: SortOrder
    jumlahBuku?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BukuCountOrderByAggregateInput
    _avg?: BukuAvgOrderByAggregateInput
    _max?: BukuMaxOrderByAggregateInput
    _min?: BukuMinOrderByAggregateInput
    _sum?: BukuSumOrderByAggregateInput
  }

  export type BukuScalarWhereWithAggregatesInput = {
    AND?: BukuScalarWhereWithAggregatesInput | BukuScalarWhereWithAggregatesInput[]
    OR?: BukuScalarWhereWithAggregatesInput[]
    NOT?: BukuScalarWhereWithAggregatesInput | BukuScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Buku"> | number
    judul?: StringWithAggregatesFilter<"Buku"> | string
    pengarang?: StringWithAggregatesFilter<"Buku"> | string
    penerbit?: StringWithAggregatesFilter<"Buku"> | string
    tahunTerbit?: IntWithAggregatesFilter<"Buku"> | number
    jumlahBuku?: IntWithAggregatesFilter<"Buku"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Buku"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Buku"> | Date | string
  }

  export type KategoriWhereInput = {
    AND?: KategoriWhereInput | KategoriWhereInput[]
    OR?: KategoriWhereInput[]
    NOT?: KategoriWhereInput | KategoriWhereInput[]
    id?: IntFilter<"Kategori"> | number
    nama?: StringFilter<"Kategori"> | string
    createdAt?: DateTimeFilter<"Kategori"> | Date | string
    updatedAt?: DateTimeFilter<"Kategori"> | Date | string
    buku?: BukuKategoriListRelationFilter
  }

  export type KategoriOrderByWithRelationInput = {
    id?: SortOrder
    nama?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    buku?: BukuKategoriOrderByRelationAggregateInput
  }

  export type KategoriWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: KategoriWhereInput | KategoriWhereInput[]
    OR?: KategoriWhereInput[]
    NOT?: KategoriWhereInput | KategoriWhereInput[]
    nama?: StringFilter<"Kategori"> | string
    createdAt?: DateTimeFilter<"Kategori"> | Date | string
    updatedAt?: DateTimeFilter<"Kategori"> | Date | string
    buku?: BukuKategoriListRelationFilter
  }, "id">

  export type KategoriOrderByWithAggregationInput = {
    id?: SortOrder
    nama?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: KategoriCountOrderByAggregateInput
    _avg?: KategoriAvgOrderByAggregateInput
    _max?: KategoriMaxOrderByAggregateInput
    _min?: KategoriMinOrderByAggregateInput
    _sum?: KategoriSumOrderByAggregateInput
  }

  export type KategoriScalarWhereWithAggregatesInput = {
    AND?: KategoriScalarWhereWithAggregatesInput | KategoriScalarWhereWithAggregatesInput[]
    OR?: KategoriScalarWhereWithAggregatesInput[]
    NOT?: KategoriScalarWhereWithAggregatesInput | KategoriScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Kategori"> | number
    nama?: StringWithAggregatesFilter<"Kategori"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Kategori"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Kategori"> | Date | string
  }

  export type EksemplarBukuWhereInput = {
    AND?: EksemplarBukuWhereInput | EksemplarBukuWhereInput[]
    OR?: EksemplarBukuWhereInput[]
    NOT?: EksemplarBukuWhereInput | EksemplarBukuWhereInput[]
    id?: IntFilter<"EksemplarBuku"> | number
    kodeEksemplar?: StringFilter<"EksemplarBuku"> | string
    bukuId?: IntFilter<"EksemplarBuku"> | number
    status?: EnumStatusFilter<"EksemplarBuku"> | $Enums.Status
    isArchived?: BoolFilter<"EksemplarBuku"> | boolean
    createdAt?: DateTimeFilter<"EksemplarBuku"> | Date | string
    updatedAt?: DateTimeFilter<"EksemplarBuku"> | Date | string
    buku?: XOR<BukuScalarRelationFilter, BukuWhereInput>
    peminjaman?: PeminjamanListRelationFilter
  }

  export type EksemplarBukuOrderByWithRelationInput = {
    id?: SortOrder
    kodeEksemplar?: SortOrder
    bukuId?: SortOrder
    status?: SortOrder
    isArchived?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    buku?: BukuOrderByWithRelationInput
    peminjaman?: PeminjamanOrderByRelationAggregateInput
  }

  export type EksemplarBukuWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    kodeEksemplar?: string
    AND?: EksemplarBukuWhereInput | EksemplarBukuWhereInput[]
    OR?: EksemplarBukuWhereInput[]
    NOT?: EksemplarBukuWhereInput | EksemplarBukuWhereInput[]
    bukuId?: IntFilter<"EksemplarBuku"> | number
    status?: EnumStatusFilter<"EksemplarBuku"> | $Enums.Status
    isArchived?: BoolFilter<"EksemplarBuku"> | boolean
    createdAt?: DateTimeFilter<"EksemplarBuku"> | Date | string
    updatedAt?: DateTimeFilter<"EksemplarBuku"> | Date | string
    buku?: XOR<BukuScalarRelationFilter, BukuWhereInput>
    peminjaman?: PeminjamanListRelationFilter
  }, "id" | "kodeEksemplar">

  export type EksemplarBukuOrderByWithAggregationInput = {
    id?: SortOrder
    kodeEksemplar?: SortOrder
    bukuId?: SortOrder
    status?: SortOrder
    isArchived?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: EksemplarBukuCountOrderByAggregateInput
    _avg?: EksemplarBukuAvgOrderByAggregateInput
    _max?: EksemplarBukuMaxOrderByAggregateInput
    _min?: EksemplarBukuMinOrderByAggregateInput
    _sum?: EksemplarBukuSumOrderByAggregateInput
  }

  export type EksemplarBukuScalarWhereWithAggregatesInput = {
    AND?: EksemplarBukuScalarWhereWithAggregatesInput | EksemplarBukuScalarWhereWithAggregatesInput[]
    OR?: EksemplarBukuScalarWhereWithAggregatesInput[]
    NOT?: EksemplarBukuScalarWhereWithAggregatesInput | EksemplarBukuScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"EksemplarBuku"> | number
    kodeEksemplar?: StringWithAggregatesFilter<"EksemplarBuku"> | string
    bukuId?: IntWithAggregatesFilter<"EksemplarBuku"> | number
    status?: EnumStatusWithAggregatesFilter<"EksemplarBuku"> | $Enums.Status
    isArchived?: BoolWithAggregatesFilter<"EksemplarBuku"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"EksemplarBuku"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"EksemplarBuku"> | Date | string
  }

  export type PeminjamanWhereInput = {
    AND?: PeminjamanWhereInput | PeminjamanWhereInput[]
    OR?: PeminjamanWhereInput[]
    NOT?: PeminjamanWhereInput | PeminjamanWhereInput[]
    id?: IntFilter<"Peminjaman"> | number
    userId?: IntFilter<"Peminjaman"> | number
    eksemplarId?: IntFilter<"Peminjaman"> | number
    tanggalPinjam?: DateTimeFilter<"Peminjaman"> | Date | string
    tanggalKembali?: DateTimeFilter<"Peminjaman"> | Date | string
    status?: EnumStatusFilter<"Peminjaman"> | $Enums.Status
    createdAt?: DateTimeFilter<"Peminjaman"> | Date | string
    updatedAt?: DateTimeFilter<"Peminjaman"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    eksemplar?: XOR<EksemplarBukuScalarRelationFilter, EksemplarBukuWhereInput>
  }

  export type PeminjamanOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    eksemplarId?: SortOrder
    tanggalPinjam?: SortOrder
    tanggalKembali?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    eksemplar?: EksemplarBukuOrderByWithRelationInput
  }

  export type PeminjamanWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PeminjamanWhereInput | PeminjamanWhereInput[]
    OR?: PeminjamanWhereInput[]
    NOT?: PeminjamanWhereInput | PeminjamanWhereInput[]
    userId?: IntFilter<"Peminjaman"> | number
    eksemplarId?: IntFilter<"Peminjaman"> | number
    tanggalPinjam?: DateTimeFilter<"Peminjaman"> | Date | string
    tanggalKembali?: DateTimeFilter<"Peminjaman"> | Date | string
    status?: EnumStatusFilter<"Peminjaman"> | $Enums.Status
    createdAt?: DateTimeFilter<"Peminjaman"> | Date | string
    updatedAt?: DateTimeFilter<"Peminjaman"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    eksemplar?: XOR<EksemplarBukuScalarRelationFilter, EksemplarBukuWhereInput>
  }, "id">

  export type PeminjamanOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    eksemplarId?: SortOrder
    tanggalPinjam?: SortOrder
    tanggalKembali?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PeminjamanCountOrderByAggregateInput
    _avg?: PeminjamanAvgOrderByAggregateInput
    _max?: PeminjamanMaxOrderByAggregateInput
    _min?: PeminjamanMinOrderByAggregateInput
    _sum?: PeminjamanSumOrderByAggregateInput
  }

  export type PeminjamanScalarWhereWithAggregatesInput = {
    AND?: PeminjamanScalarWhereWithAggregatesInput | PeminjamanScalarWhereWithAggregatesInput[]
    OR?: PeminjamanScalarWhereWithAggregatesInput[]
    NOT?: PeminjamanScalarWhereWithAggregatesInput | PeminjamanScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Peminjaman"> | number
    userId?: IntWithAggregatesFilter<"Peminjaman"> | number
    eksemplarId?: IntWithAggregatesFilter<"Peminjaman"> | number
    tanggalPinjam?: DateTimeWithAggregatesFilter<"Peminjaman"> | Date | string
    tanggalKembali?: DateTimeWithAggregatesFilter<"Peminjaman"> | Date | string
    status?: EnumStatusWithAggregatesFilter<"Peminjaman"> | $Enums.Status
    createdAt?: DateTimeWithAggregatesFilter<"Peminjaman"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Peminjaman"> | Date | string
  }

  export type BukuKategoriWhereInput = {
    AND?: BukuKategoriWhereInput | BukuKategoriWhereInput[]
    OR?: BukuKategoriWhereInput[]
    NOT?: BukuKategoriWhereInput | BukuKategoriWhereInput[]
    id?: IntFilter<"BukuKategori"> | number
    idBuku?: IntFilter<"BukuKategori"> | number
    kategoriId?: IntFilter<"BukuKategori"> | number
    createdAt?: DateTimeFilter<"BukuKategori"> | Date | string
    updatedAt?: DateTimeFilter<"BukuKategori"> | Date | string
    buku?: XOR<BukuScalarRelationFilter, BukuWhereInput>
    kategori?: XOR<KategoriScalarRelationFilter, KategoriWhereInput>
  }

  export type BukuKategoriOrderByWithRelationInput = {
    id?: SortOrder
    idBuku?: SortOrder
    kategoriId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    buku?: BukuOrderByWithRelationInput
    kategori?: KategoriOrderByWithRelationInput
  }

  export type BukuKategoriWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: BukuKategoriWhereInput | BukuKategoriWhereInput[]
    OR?: BukuKategoriWhereInput[]
    NOT?: BukuKategoriWhereInput | BukuKategoriWhereInput[]
    idBuku?: IntFilter<"BukuKategori"> | number
    kategoriId?: IntFilter<"BukuKategori"> | number
    createdAt?: DateTimeFilter<"BukuKategori"> | Date | string
    updatedAt?: DateTimeFilter<"BukuKategori"> | Date | string
    buku?: XOR<BukuScalarRelationFilter, BukuWhereInput>
    kategori?: XOR<KategoriScalarRelationFilter, KategoriWhereInput>
  }, "id">

  export type BukuKategoriOrderByWithAggregationInput = {
    id?: SortOrder
    idBuku?: SortOrder
    kategoriId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BukuKategoriCountOrderByAggregateInput
    _avg?: BukuKategoriAvgOrderByAggregateInput
    _max?: BukuKategoriMaxOrderByAggregateInput
    _min?: BukuKategoriMinOrderByAggregateInput
    _sum?: BukuKategoriSumOrderByAggregateInput
  }

  export type BukuKategoriScalarWhereWithAggregatesInput = {
    AND?: BukuKategoriScalarWhereWithAggregatesInput | BukuKategoriScalarWhereWithAggregatesInput[]
    OR?: BukuKategoriScalarWhereWithAggregatesInput[]
    NOT?: BukuKategoriScalarWhereWithAggregatesInput | BukuKategoriScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"BukuKategori"> | number
    idBuku?: IntWithAggregatesFilter<"BukuKategori"> | number
    kategoriId?: IntWithAggregatesFilter<"BukuKategori"> | number
    createdAt?: DateTimeWithAggregatesFilter<"BukuKategori"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"BukuKategori"> | Date | string
  }

  export type UserCreateInput = {
    name: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    peminjaman?: PeminjamanCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    peminjaman?: PeminjamanUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    peminjaman?: PeminjamanUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    peminjaman?: PeminjamanUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    name: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BukuCreateInput = {
    judul: string
    pengarang: string
    penerbit: string
    tahunTerbit: number
    jumlahBuku: number
    createdAt?: Date | string
    updatedAt?: Date | string
    eksemplarBuku?: EksemplarBukuCreateNestedManyWithoutBukuInput
    kategori?: BukuKategoriCreateNestedManyWithoutBukuInput
  }

  export type BukuUncheckedCreateInput = {
    id?: number
    judul: string
    pengarang: string
    penerbit: string
    tahunTerbit: number
    jumlahBuku: number
    createdAt?: Date | string
    updatedAt?: Date | string
    eksemplarBuku?: EksemplarBukuUncheckedCreateNestedManyWithoutBukuInput
    kategori?: BukuKategoriUncheckedCreateNestedManyWithoutBukuInput
  }

  export type BukuUpdateInput = {
    judul?: StringFieldUpdateOperationsInput | string
    pengarang?: StringFieldUpdateOperationsInput | string
    penerbit?: StringFieldUpdateOperationsInput | string
    tahunTerbit?: IntFieldUpdateOperationsInput | number
    jumlahBuku?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    eksemplarBuku?: EksemplarBukuUpdateManyWithoutBukuNestedInput
    kategori?: BukuKategoriUpdateManyWithoutBukuNestedInput
  }

  export type BukuUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    judul?: StringFieldUpdateOperationsInput | string
    pengarang?: StringFieldUpdateOperationsInput | string
    penerbit?: StringFieldUpdateOperationsInput | string
    tahunTerbit?: IntFieldUpdateOperationsInput | number
    jumlahBuku?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    eksemplarBuku?: EksemplarBukuUncheckedUpdateManyWithoutBukuNestedInput
    kategori?: BukuKategoriUncheckedUpdateManyWithoutBukuNestedInput
  }

  export type BukuCreateManyInput = {
    id?: number
    judul: string
    pengarang: string
    penerbit: string
    tahunTerbit: number
    jumlahBuku: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BukuUpdateManyMutationInput = {
    judul?: StringFieldUpdateOperationsInput | string
    pengarang?: StringFieldUpdateOperationsInput | string
    penerbit?: StringFieldUpdateOperationsInput | string
    tahunTerbit?: IntFieldUpdateOperationsInput | number
    jumlahBuku?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BukuUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    judul?: StringFieldUpdateOperationsInput | string
    pengarang?: StringFieldUpdateOperationsInput | string
    penerbit?: StringFieldUpdateOperationsInput | string
    tahunTerbit?: IntFieldUpdateOperationsInput | number
    jumlahBuku?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KategoriCreateInput = {
    nama: string
    createdAt?: Date | string
    updatedAt?: Date | string
    buku?: BukuKategoriCreateNestedManyWithoutKategoriInput
  }

  export type KategoriUncheckedCreateInput = {
    id?: number
    nama: string
    createdAt?: Date | string
    updatedAt?: Date | string
    buku?: BukuKategoriUncheckedCreateNestedManyWithoutKategoriInput
  }

  export type KategoriUpdateInput = {
    nama?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    buku?: BukuKategoriUpdateManyWithoutKategoriNestedInput
  }

  export type KategoriUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    buku?: BukuKategoriUncheckedUpdateManyWithoutKategoriNestedInput
  }

  export type KategoriCreateManyInput = {
    id?: number
    nama: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type KategoriUpdateManyMutationInput = {
    nama?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KategoriUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EksemplarBukuCreateInput = {
    kodeEksemplar: string
    status?: $Enums.Status
    isArchived?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    buku: BukuCreateNestedOneWithoutEksemplarBukuInput
    peminjaman?: PeminjamanCreateNestedManyWithoutEksemplarInput
  }

  export type EksemplarBukuUncheckedCreateInput = {
    id?: number
    kodeEksemplar: string
    bukuId: number
    status?: $Enums.Status
    isArchived?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    peminjaman?: PeminjamanUncheckedCreateNestedManyWithoutEksemplarInput
  }

  export type EksemplarBukuUpdateInput = {
    kodeEksemplar?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    buku?: BukuUpdateOneRequiredWithoutEksemplarBukuNestedInput
    peminjaman?: PeminjamanUpdateManyWithoutEksemplarNestedInput
  }

  export type EksemplarBukuUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    kodeEksemplar?: StringFieldUpdateOperationsInput | string
    bukuId?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    peminjaman?: PeminjamanUncheckedUpdateManyWithoutEksemplarNestedInput
  }

  export type EksemplarBukuCreateManyInput = {
    id?: number
    kodeEksemplar: string
    bukuId: number
    status?: $Enums.Status
    isArchived?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EksemplarBukuUpdateManyMutationInput = {
    kodeEksemplar?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EksemplarBukuUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    kodeEksemplar?: StringFieldUpdateOperationsInput | string
    bukuId?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PeminjamanCreateInput = {
    tanggalPinjam?: Date | string
    tanggalKembali: Date | string
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutPeminjamanInput
    eksemplar: EksemplarBukuCreateNestedOneWithoutPeminjamanInput
  }

  export type PeminjamanUncheckedCreateInput = {
    id?: number
    userId: number
    eksemplarId: number
    tanggalPinjam?: Date | string
    tanggalKembali: Date | string
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PeminjamanUpdateInput = {
    tanggalPinjam?: DateTimeFieldUpdateOperationsInput | Date | string
    tanggalKembali?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPeminjamanNestedInput
    eksemplar?: EksemplarBukuUpdateOneRequiredWithoutPeminjamanNestedInput
  }

  export type PeminjamanUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    eksemplarId?: IntFieldUpdateOperationsInput | number
    tanggalPinjam?: DateTimeFieldUpdateOperationsInput | Date | string
    tanggalKembali?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PeminjamanCreateManyInput = {
    id?: number
    userId: number
    eksemplarId: number
    tanggalPinjam?: Date | string
    tanggalKembali: Date | string
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PeminjamanUpdateManyMutationInput = {
    tanggalPinjam?: DateTimeFieldUpdateOperationsInput | Date | string
    tanggalKembali?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PeminjamanUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    eksemplarId?: IntFieldUpdateOperationsInput | number
    tanggalPinjam?: DateTimeFieldUpdateOperationsInput | Date | string
    tanggalKembali?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BukuKategoriCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    buku: BukuCreateNestedOneWithoutKategoriInput
    kategori: KategoriCreateNestedOneWithoutBukuInput
  }

  export type BukuKategoriUncheckedCreateInput = {
    id?: number
    idBuku: number
    kategoriId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BukuKategoriUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    buku?: BukuUpdateOneRequiredWithoutKategoriNestedInput
    kategori?: KategoriUpdateOneRequiredWithoutBukuNestedInput
  }

  export type BukuKategoriUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    idBuku?: IntFieldUpdateOperationsInput | number
    kategoriId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BukuKategoriCreateManyInput = {
    id?: number
    idBuku: number
    kategoriId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BukuKategoriUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BukuKategoriUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    idBuku?: IntFieldUpdateOperationsInput | number
    kategoriId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
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

  export type PeminjamanListRelationFilter = {
    every?: PeminjamanWhereInput
    some?: PeminjamanWhereInput
    none?: PeminjamanWhereInput
  }

  export type PeminjamanOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
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

  export type EksemplarBukuListRelationFilter = {
    every?: EksemplarBukuWhereInput
    some?: EksemplarBukuWhereInput
    none?: EksemplarBukuWhereInput
  }

  export type BukuKategoriListRelationFilter = {
    every?: BukuKategoriWhereInput
    some?: BukuKategoriWhereInput
    none?: BukuKategoriWhereInput
  }

  export type EksemplarBukuOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BukuKategoriOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BukuCountOrderByAggregateInput = {
    id?: SortOrder
    judul?: SortOrder
    pengarang?: SortOrder
    penerbit?: SortOrder
    tahunTerbit?: SortOrder
    jumlahBuku?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BukuAvgOrderByAggregateInput = {
    id?: SortOrder
    tahunTerbit?: SortOrder
    jumlahBuku?: SortOrder
  }

  export type BukuMaxOrderByAggregateInput = {
    id?: SortOrder
    judul?: SortOrder
    pengarang?: SortOrder
    penerbit?: SortOrder
    tahunTerbit?: SortOrder
    jumlahBuku?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BukuMinOrderByAggregateInput = {
    id?: SortOrder
    judul?: SortOrder
    pengarang?: SortOrder
    penerbit?: SortOrder
    tahunTerbit?: SortOrder
    jumlahBuku?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BukuSumOrderByAggregateInput = {
    id?: SortOrder
    tahunTerbit?: SortOrder
    jumlahBuku?: SortOrder
  }

  export type KategoriCountOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type KategoriAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type KategoriMaxOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type KategoriMinOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type KategoriSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type BukuScalarRelationFilter = {
    is?: BukuWhereInput
    isNot?: BukuWhereInput
  }

  export type EksemplarBukuCountOrderByAggregateInput = {
    id?: SortOrder
    kodeEksemplar?: SortOrder
    bukuId?: SortOrder
    status?: SortOrder
    isArchived?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EksemplarBukuAvgOrderByAggregateInput = {
    id?: SortOrder
    bukuId?: SortOrder
  }

  export type EksemplarBukuMaxOrderByAggregateInput = {
    id?: SortOrder
    kodeEksemplar?: SortOrder
    bukuId?: SortOrder
    status?: SortOrder
    isArchived?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EksemplarBukuMinOrderByAggregateInput = {
    id?: SortOrder
    kodeEksemplar?: SortOrder
    bukuId?: SortOrder
    status?: SortOrder
    isArchived?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EksemplarBukuSumOrderByAggregateInput = {
    id?: SortOrder
    bukuId?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type EksemplarBukuScalarRelationFilter = {
    is?: EksemplarBukuWhereInput
    isNot?: EksemplarBukuWhereInput
  }

  export type PeminjamanCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    eksemplarId?: SortOrder
    tanggalPinjam?: SortOrder
    tanggalKembali?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PeminjamanAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    eksemplarId?: SortOrder
  }

  export type PeminjamanMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    eksemplarId?: SortOrder
    tanggalPinjam?: SortOrder
    tanggalKembali?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PeminjamanMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    eksemplarId?: SortOrder
    tanggalPinjam?: SortOrder
    tanggalKembali?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PeminjamanSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    eksemplarId?: SortOrder
  }

  export type KategoriScalarRelationFilter = {
    is?: KategoriWhereInput
    isNot?: KategoriWhereInput
  }

  export type BukuKategoriCountOrderByAggregateInput = {
    id?: SortOrder
    idBuku?: SortOrder
    kategoriId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BukuKategoriAvgOrderByAggregateInput = {
    id?: SortOrder
    idBuku?: SortOrder
    kategoriId?: SortOrder
  }

  export type BukuKategoriMaxOrderByAggregateInput = {
    id?: SortOrder
    idBuku?: SortOrder
    kategoriId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BukuKategoriMinOrderByAggregateInput = {
    id?: SortOrder
    idBuku?: SortOrder
    kategoriId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BukuKategoriSumOrderByAggregateInput = {
    id?: SortOrder
    idBuku?: SortOrder
    kategoriId?: SortOrder
  }

  export type PeminjamanCreateNestedManyWithoutUserInput = {
    create?: XOR<PeminjamanCreateWithoutUserInput, PeminjamanUncheckedCreateWithoutUserInput> | PeminjamanCreateWithoutUserInput[] | PeminjamanUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PeminjamanCreateOrConnectWithoutUserInput | PeminjamanCreateOrConnectWithoutUserInput[]
    createMany?: PeminjamanCreateManyUserInputEnvelope
    connect?: PeminjamanWhereUniqueInput | PeminjamanWhereUniqueInput[]
  }

  export type PeminjamanUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PeminjamanCreateWithoutUserInput, PeminjamanUncheckedCreateWithoutUserInput> | PeminjamanCreateWithoutUserInput[] | PeminjamanUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PeminjamanCreateOrConnectWithoutUserInput | PeminjamanCreateOrConnectWithoutUserInput[]
    createMany?: PeminjamanCreateManyUserInputEnvelope
    connect?: PeminjamanWhereUniqueInput | PeminjamanWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type PeminjamanUpdateManyWithoutUserNestedInput = {
    create?: XOR<PeminjamanCreateWithoutUserInput, PeminjamanUncheckedCreateWithoutUserInput> | PeminjamanCreateWithoutUserInput[] | PeminjamanUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PeminjamanCreateOrConnectWithoutUserInput | PeminjamanCreateOrConnectWithoutUserInput[]
    upsert?: PeminjamanUpsertWithWhereUniqueWithoutUserInput | PeminjamanUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PeminjamanCreateManyUserInputEnvelope
    set?: PeminjamanWhereUniqueInput | PeminjamanWhereUniqueInput[]
    disconnect?: PeminjamanWhereUniqueInput | PeminjamanWhereUniqueInput[]
    delete?: PeminjamanWhereUniqueInput | PeminjamanWhereUniqueInput[]
    connect?: PeminjamanWhereUniqueInput | PeminjamanWhereUniqueInput[]
    update?: PeminjamanUpdateWithWhereUniqueWithoutUserInput | PeminjamanUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PeminjamanUpdateManyWithWhereWithoutUserInput | PeminjamanUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PeminjamanScalarWhereInput | PeminjamanScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PeminjamanUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PeminjamanCreateWithoutUserInput, PeminjamanUncheckedCreateWithoutUserInput> | PeminjamanCreateWithoutUserInput[] | PeminjamanUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PeminjamanCreateOrConnectWithoutUserInput | PeminjamanCreateOrConnectWithoutUserInput[]
    upsert?: PeminjamanUpsertWithWhereUniqueWithoutUserInput | PeminjamanUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PeminjamanCreateManyUserInputEnvelope
    set?: PeminjamanWhereUniqueInput | PeminjamanWhereUniqueInput[]
    disconnect?: PeminjamanWhereUniqueInput | PeminjamanWhereUniqueInput[]
    delete?: PeminjamanWhereUniqueInput | PeminjamanWhereUniqueInput[]
    connect?: PeminjamanWhereUniqueInput | PeminjamanWhereUniqueInput[]
    update?: PeminjamanUpdateWithWhereUniqueWithoutUserInput | PeminjamanUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PeminjamanUpdateManyWithWhereWithoutUserInput | PeminjamanUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PeminjamanScalarWhereInput | PeminjamanScalarWhereInput[]
  }

  export type EksemplarBukuCreateNestedManyWithoutBukuInput = {
    create?: XOR<EksemplarBukuCreateWithoutBukuInput, EksemplarBukuUncheckedCreateWithoutBukuInput> | EksemplarBukuCreateWithoutBukuInput[] | EksemplarBukuUncheckedCreateWithoutBukuInput[]
    connectOrCreate?: EksemplarBukuCreateOrConnectWithoutBukuInput | EksemplarBukuCreateOrConnectWithoutBukuInput[]
    createMany?: EksemplarBukuCreateManyBukuInputEnvelope
    connect?: EksemplarBukuWhereUniqueInput | EksemplarBukuWhereUniqueInput[]
  }

  export type BukuKategoriCreateNestedManyWithoutBukuInput = {
    create?: XOR<BukuKategoriCreateWithoutBukuInput, BukuKategoriUncheckedCreateWithoutBukuInput> | BukuKategoriCreateWithoutBukuInput[] | BukuKategoriUncheckedCreateWithoutBukuInput[]
    connectOrCreate?: BukuKategoriCreateOrConnectWithoutBukuInput | BukuKategoriCreateOrConnectWithoutBukuInput[]
    createMany?: BukuKategoriCreateManyBukuInputEnvelope
    connect?: BukuKategoriWhereUniqueInput | BukuKategoriWhereUniqueInput[]
  }

  export type EksemplarBukuUncheckedCreateNestedManyWithoutBukuInput = {
    create?: XOR<EksemplarBukuCreateWithoutBukuInput, EksemplarBukuUncheckedCreateWithoutBukuInput> | EksemplarBukuCreateWithoutBukuInput[] | EksemplarBukuUncheckedCreateWithoutBukuInput[]
    connectOrCreate?: EksemplarBukuCreateOrConnectWithoutBukuInput | EksemplarBukuCreateOrConnectWithoutBukuInput[]
    createMany?: EksemplarBukuCreateManyBukuInputEnvelope
    connect?: EksemplarBukuWhereUniqueInput | EksemplarBukuWhereUniqueInput[]
  }

  export type BukuKategoriUncheckedCreateNestedManyWithoutBukuInput = {
    create?: XOR<BukuKategoriCreateWithoutBukuInput, BukuKategoriUncheckedCreateWithoutBukuInput> | BukuKategoriCreateWithoutBukuInput[] | BukuKategoriUncheckedCreateWithoutBukuInput[]
    connectOrCreate?: BukuKategoriCreateOrConnectWithoutBukuInput | BukuKategoriCreateOrConnectWithoutBukuInput[]
    createMany?: BukuKategoriCreateManyBukuInputEnvelope
    connect?: BukuKategoriWhereUniqueInput | BukuKategoriWhereUniqueInput[]
  }

  export type EksemplarBukuUpdateManyWithoutBukuNestedInput = {
    create?: XOR<EksemplarBukuCreateWithoutBukuInput, EksemplarBukuUncheckedCreateWithoutBukuInput> | EksemplarBukuCreateWithoutBukuInput[] | EksemplarBukuUncheckedCreateWithoutBukuInput[]
    connectOrCreate?: EksemplarBukuCreateOrConnectWithoutBukuInput | EksemplarBukuCreateOrConnectWithoutBukuInput[]
    upsert?: EksemplarBukuUpsertWithWhereUniqueWithoutBukuInput | EksemplarBukuUpsertWithWhereUniqueWithoutBukuInput[]
    createMany?: EksemplarBukuCreateManyBukuInputEnvelope
    set?: EksemplarBukuWhereUniqueInput | EksemplarBukuWhereUniqueInput[]
    disconnect?: EksemplarBukuWhereUniqueInput | EksemplarBukuWhereUniqueInput[]
    delete?: EksemplarBukuWhereUniqueInput | EksemplarBukuWhereUniqueInput[]
    connect?: EksemplarBukuWhereUniqueInput | EksemplarBukuWhereUniqueInput[]
    update?: EksemplarBukuUpdateWithWhereUniqueWithoutBukuInput | EksemplarBukuUpdateWithWhereUniqueWithoutBukuInput[]
    updateMany?: EksemplarBukuUpdateManyWithWhereWithoutBukuInput | EksemplarBukuUpdateManyWithWhereWithoutBukuInput[]
    deleteMany?: EksemplarBukuScalarWhereInput | EksemplarBukuScalarWhereInput[]
  }

  export type BukuKategoriUpdateManyWithoutBukuNestedInput = {
    create?: XOR<BukuKategoriCreateWithoutBukuInput, BukuKategoriUncheckedCreateWithoutBukuInput> | BukuKategoriCreateWithoutBukuInput[] | BukuKategoriUncheckedCreateWithoutBukuInput[]
    connectOrCreate?: BukuKategoriCreateOrConnectWithoutBukuInput | BukuKategoriCreateOrConnectWithoutBukuInput[]
    upsert?: BukuKategoriUpsertWithWhereUniqueWithoutBukuInput | BukuKategoriUpsertWithWhereUniqueWithoutBukuInput[]
    createMany?: BukuKategoriCreateManyBukuInputEnvelope
    set?: BukuKategoriWhereUniqueInput | BukuKategoriWhereUniqueInput[]
    disconnect?: BukuKategoriWhereUniqueInput | BukuKategoriWhereUniqueInput[]
    delete?: BukuKategoriWhereUniqueInput | BukuKategoriWhereUniqueInput[]
    connect?: BukuKategoriWhereUniqueInput | BukuKategoriWhereUniqueInput[]
    update?: BukuKategoriUpdateWithWhereUniqueWithoutBukuInput | BukuKategoriUpdateWithWhereUniqueWithoutBukuInput[]
    updateMany?: BukuKategoriUpdateManyWithWhereWithoutBukuInput | BukuKategoriUpdateManyWithWhereWithoutBukuInput[]
    deleteMany?: BukuKategoriScalarWhereInput | BukuKategoriScalarWhereInput[]
  }

  export type EksemplarBukuUncheckedUpdateManyWithoutBukuNestedInput = {
    create?: XOR<EksemplarBukuCreateWithoutBukuInput, EksemplarBukuUncheckedCreateWithoutBukuInput> | EksemplarBukuCreateWithoutBukuInput[] | EksemplarBukuUncheckedCreateWithoutBukuInput[]
    connectOrCreate?: EksemplarBukuCreateOrConnectWithoutBukuInput | EksemplarBukuCreateOrConnectWithoutBukuInput[]
    upsert?: EksemplarBukuUpsertWithWhereUniqueWithoutBukuInput | EksemplarBukuUpsertWithWhereUniqueWithoutBukuInput[]
    createMany?: EksemplarBukuCreateManyBukuInputEnvelope
    set?: EksemplarBukuWhereUniqueInput | EksemplarBukuWhereUniqueInput[]
    disconnect?: EksemplarBukuWhereUniqueInput | EksemplarBukuWhereUniqueInput[]
    delete?: EksemplarBukuWhereUniqueInput | EksemplarBukuWhereUniqueInput[]
    connect?: EksemplarBukuWhereUniqueInput | EksemplarBukuWhereUniqueInput[]
    update?: EksemplarBukuUpdateWithWhereUniqueWithoutBukuInput | EksemplarBukuUpdateWithWhereUniqueWithoutBukuInput[]
    updateMany?: EksemplarBukuUpdateManyWithWhereWithoutBukuInput | EksemplarBukuUpdateManyWithWhereWithoutBukuInput[]
    deleteMany?: EksemplarBukuScalarWhereInput | EksemplarBukuScalarWhereInput[]
  }

  export type BukuKategoriUncheckedUpdateManyWithoutBukuNestedInput = {
    create?: XOR<BukuKategoriCreateWithoutBukuInput, BukuKategoriUncheckedCreateWithoutBukuInput> | BukuKategoriCreateWithoutBukuInput[] | BukuKategoriUncheckedCreateWithoutBukuInput[]
    connectOrCreate?: BukuKategoriCreateOrConnectWithoutBukuInput | BukuKategoriCreateOrConnectWithoutBukuInput[]
    upsert?: BukuKategoriUpsertWithWhereUniqueWithoutBukuInput | BukuKategoriUpsertWithWhereUniqueWithoutBukuInput[]
    createMany?: BukuKategoriCreateManyBukuInputEnvelope
    set?: BukuKategoriWhereUniqueInput | BukuKategoriWhereUniqueInput[]
    disconnect?: BukuKategoriWhereUniqueInput | BukuKategoriWhereUniqueInput[]
    delete?: BukuKategoriWhereUniqueInput | BukuKategoriWhereUniqueInput[]
    connect?: BukuKategoriWhereUniqueInput | BukuKategoriWhereUniqueInput[]
    update?: BukuKategoriUpdateWithWhereUniqueWithoutBukuInput | BukuKategoriUpdateWithWhereUniqueWithoutBukuInput[]
    updateMany?: BukuKategoriUpdateManyWithWhereWithoutBukuInput | BukuKategoriUpdateManyWithWhereWithoutBukuInput[]
    deleteMany?: BukuKategoriScalarWhereInput | BukuKategoriScalarWhereInput[]
  }

  export type BukuKategoriCreateNestedManyWithoutKategoriInput = {
    create?: XOR<BukuKategoriCreateWithoutKategoriInput, BukuKategoriUncheckedCreateWithoutKategoriInput> | BukuKategoriCreateWithoutKategoriInput[] | BukuKategoriUncheckedCreateWithoutKategoriInput[]
    connectOrCreate?: BukuKategoriCreateOrConnectWithoutKategoriInput | BukuKategoriCreateOrConnectWithoutKategoriInput[]
    createMany?: BukuKategoriCreateManyKategoriInputEnvelope
    connect?: BukuKategoriWhereUniqueInput | BukuKategoriWhereUniqueInput[]
  }

  export type BukuKategoriUncheckedCreateNestedManyWithoutKategoriInput = {
    create?: XOR<BukuKategoriCreateWithoutKategoriInput, BukuKategoriUncheckedCreateWithoutKategoriInput> | BukuKategoriCreateWithoutKategoriInput[] | BukuKategoriUncheckedCreateWithoutKategoriInput[]
    connectOrCreate?: BukuKategoriCreateOrConnectWithoutKategoriInput | BukuKategoriCreateOrConnectWithoutKategoriInput[]
    createMany?: BukuKategoriCreateManyKategoriInputEnvelope
    connect?: BukuKategoriWhereUniqueInput | BukuKategoriWhereUniqueInput[]
  }

  export type BukuKategoriUpdateManyWithoutKategoriNestedInput = {
    create?: XOR<BukuKategoriCreateWithoutKategoriInput, BukuKategoriUncheckedCreateWithoutKategoriInput> | BukuKategoriCreateWithoutKategoriInput[] | BukuKategoriUncheckedCreateWithoutKategoriInput[]
    connectOrCreate?: BukuKategoriCreateOrConnectWithoutKategoriInput | BukuKategoriCreateOrConnectWithoutKategoriInput[]
    upsert?: BukuKategoriUpsertWithWhereUniqueWithoutKategoriInput | BukuKategoriUpsertWithWhereUniqueWithoutKategoriInput[]
    createMany?: BukuKategoriCreateManyKategoriInputEnvelope
    set?: BukuKategoriWhereUniqueInput | BukuKategoriWhereUniqueInput[]
    disconnect?: BukuKategoriWhereUniqueInput | BukuKategoriWhereUniqueInput[]
    delete?: BukuKategoriWhereUniqueInput | BukuKategoriWhereUniqueInput[]
    connect?: BukuKategoriWhereUniqueInput | BukuKategoriWhereUniqueInput[]
    update?: BukuKategoriUpdateWithWhereUniqueWithoutKategoriInput | BukuKategoriUpdateWithWhereUniqueWithoutKategoriInput[]
    updateMany?: BukuKategoriUpdateManyWithWhereWithoutKategoriInput | BukuKategoriUpdateManyWithWhereWithoutKategoriInput[]
    deleteMany?: BukuKategoriScalarWhereInput | BukuKategoriScalarWhereInput[]
  }

  export type BukuKategoriUncheckedUpdateManyWithoutKategoriNestedInput = {
    create?: XOR<BukuKategoriCreateWithoutKategoriInput, BukuKategoriUncheckedCreateWithoutKategoriInput> | BukuKategoriCreateWithoutKategoriInput[] | BukuKategoriUncheckedCreateWithoutKategoriInput[]
    connectOrCreate?: BukuKategoriCreateOrConnectWithoutKategoriInput | BukuKategoriCreateOrConnectWithoutKategoriInput[]
    upsert?: BukuKategoriUpsertWithWhereUniqueWithoutKategoriInput | BukuKategoriUpsertWithWhereUniqueWithoutKategoriInput[]
    createMany?: BukuKategoriCreateManyKategoriInputEnvelope
    set?: BukuKategoriWhereUniqueInput | BukuKategoriWhereUniqueInput[]
    disconnect?: BukuKategoriWhereUniqueInput | BukuKategoriWhereUniqueInput[]
    delete?: BukuKategoriWhereUniqueInput | BukuKategoriWhereUniqueInput[]
    connect?: BukuKategoriWhereUniqueInput | BukuKategoriWhereUniqueInput[]
    update?: BukuKategoriUpdateWithWhereUniqueWithoutKategoriInput | BukuKategoriUpdateWithWhereUniqueWithoutKategoriInput[]
    updateMany?: BukuKategoriUpdateManyWithWhereWithoutKategoriInput | BukuKategoriUpdateManyWithWhereWithoutKategoriInput[]
    deleteMany?: BukuKategoriScalarWhereInput | BukuKategoriScalarWhereInput[]
  }

  export type BukuCreateNestedOneWithoutEksemplarBukuInput = {
    create?: XOR<BukuCreateWithoutEksemplarBukuInput, BukuUncheckedCreateWithoutEksemplarBukuInput>
    connectOrCreate?: BukuCreateOrConnectWithoutEksemplarBukuInput
    connect?: BukuWhereUniqueInput
  }

  export type PeminjamanCreateNestedManyWithoutEksemplarInput = {
    create?: XOR<PeminjamanCreateWithoutEksemplarInput, PeminjamanUncheckedCreateWithoutEksemplarInput> | PeminjamanCreateWithoutEksemplarInput[] | PeminjamanUncheckedCreateWithoutEksemplarInput[]
    connectOrCreate?: PeminjamanCreateOrConnectWithoutEksemplarInput | PeminjamanCreateOrConnectWithoutEksemplarInput[]
    createMany?: PeminjamanCreateManyEksemplarInputEnvelope
    connect?: PeminjamanWhereUniqueInput | PeminjamanWhereUniqueInput[]
  }

  export type PeminjamanUncheckedCreateNestedManyWithoutEksemplarInput = {
    create?: XOR<PeminjamanCreateWithoutEksemplarInput, PeminjamanUncheckedCreateWithoutEksemplarInput> | PeminjamanCreateWithoutEksemplarInput[] | PeminjamanUncheckedCreateWithoutEksemplarInput[]
    connectOrCreate?: PeminjamanCreateOrConnectWithoutEksemplarInput | PeminjamanCreateOrConnectWithoutEksemplarInput[]
    createMany?: PeminjamanCreateManyEksemplarInputEnvelope
    connect?: PeminjamanWhereUniqueInput | PeminjamanWhereUniqueInput[]
  }

  export type EnumStatusFieldUpdateOperationsInput = {
    set?: $Enums.Status
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type BukuUpdateOneRequiredWithoutEksemplarBukuNestedInput = {
    create?: XOR<BukuCreateWithoutEksemplarBukuInput, BukuUncheckedCreateWithoutEksemplarBukuInput>
    connectOrCreate?: BukuCreateOrConnectWithoutEksemplarBukuInput
    upsert?: BukuUpsertWithoutEksemplarBukuInput
    connect?: BukuWhereUniqueInput
    update?: XOR<XOR<BukuUpdateToOneWithWhereWithoutEksemplarBukuInput, BukuUpdateWithoutEksemplarBukuInput>, BukuUncheckedUpdateWithoutEksemplarBukuInput>
  }

  export type PeminjamanUpdateManyWithoutEksemplarNestedInput = {
    create?: XOR<PeminjamanCreateWithoutEksemplarInput, PeminjamanUncheckedCreateWithoutEksemplarInput> | PeminjamanCreateWithoutEksemplarInput[] | PeminjamanUncheckedCreateWithoutEksemplarInput[]
    connectOrCreate?: PeminjamanCreateOrConnectWithoutEksemplarInput | PeminjamanCreateOrConnectWithoutEksemplarInput[]
    upsert?: PeminjamanUpsertWithWhereUniqueWithoutEksemplarInput | PeminjamanUpsertWithWhereUniqueWithoutEksemplarInput[]
    createMany?: PeminjamanCreateManyEksemplarInputEnvelope
    set?: PeminjamanWhereUniqueInput | PeminjamanWhereUniqueInput[]
    disconnect?: PeminjamanWhereUniqueInput | PeminjamanWhereUniqueInput[]
    delete?: PeminjamanWhereUniqueInput | PeminjamanWhereUniqueInput[]
    connect?: PeminjamanWhereUniqueInput | PeminjamanWhereUniqueInput[]
    update?: PeminjamanUpdateWithWhereUniqueWithoutEksemplarInput | PeminjamanUpdateWithWhereUniqueWithoutEksemplarInput[]
    updateMany?: PeminjamanUpdateManyWithWhereWithoutEksemplarInput | PeminjamanUpdateManyWithWhereWithoutEksemplarInput[]
    deleteMany?: PeminjamanScalarWhereInput | PeminjamanScalarWhereInput[]
  }

  export type PeminjamanUncheckedUpdateManyWithoutEksemplarNestedInput = {
    create?: XOR<PeminjamanCreateWithoutEksemplarInput, PeminjamanUncheckedCreateWithoutEksemplarInput> | PeminjamanCreateWithoutEksemplarInput[] | PeminjamanUncheckedCreateWithoutEksemplarInput[]
    connectOrCreate?: PeminjamanCreateOrConnectWithoutEksemplarInput | PeminjamanCreateOrConnectWithoutEksemplarInput[]
    upsert?: PeminjamanUpsertWithWhereUniqueWithoutEksemplarInput | PeminjamanUpsertWithWhereUniqueWithoutEksemplarInput[]
    createMany?: PeminjamanCreateManyEksemplarInputEnvelope
    set?: PeminjamanWhereUniqueInput | PeminjamanWhereUniqueInput[]
    disconnect?: PeminjamanWhereUniqueInput | PeminjamanWhereUniqueInput[]
    delete?: PeminjamanWhereUniqueInput | PeminjamanWhereUniqueInput[]
    connect?: PeminjamanWhereUniqueInput | PeminjamanWhereUniqueInput[]
    update?: PeminjamanUpdateWithWhereUniqueWithoutEksemplarInput | PeminjamanUpdateWithWhereUniqueWithoutEksemplarInput[]
    updateMany?: PeminjamanUpdateManyWithWhereWithoutEksemplarInput | PeminjamanUpdateManyWithWhereWithoutEksemplarInput[]
    deleteMany?: PeminjamanScalarWhereInput | PeminjamanScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutPeminjamanInput = {
    create?: XOR<UserCreateWithoutPeminjamanInput, UserUncheckedCreateWithoutPeminjamanInput>
    connectOrCreate?: UserCreateOrConnectWithoutPeminjamanInput
    connect?: UserWhereUniqueInput
  }

  export type EksemplarBukuCreateNestedOneWithoutPeminjamanInput = {
    create?: XOR<EksemplarBukuCreateWithoutPeminjamanInput, EksemplarBukuUncheckedCreateWithoutPeminjamanInput>
    connectOrCreate?: EksemplarBukuCreateOrConnectWithoutPeminjamanInput
    connect?: EksemplarBukuWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutPeminjamanNestedInput = {
    create?: XOR<UserCreateWithoutPeminjamanInput, UserUncheckedCreateWithoutPeminjamanInput>
    connectOrCreate?: UserCreateOrConnectWithoutPeminjamanInput
    upsert?: UserUpsertWithoutPeminjamanInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPeminjamanInput, UserUpdateWithoutPeminjamanInput>, UserUncheckedUpdateWithoutPeminjamanInput>
  }

  export type EksemplarBukuUpdateOneRequiredWithoutPeminjamanNestedInput = {
    create?: XOR<EksemplarBukuCreateWithoutPeminjamanInput, EksemplarBukuUncheckedCreateWithoutPeminjamanInput>
    connectOrCreate?: EksemplarBukuCreateOrConnectWithoutPeminjamanInput
    upsert?: EksemplarBukuUpsertWithoutPeminjamanInput
    connect?: EksemplarBukuWhereUniqueInput
    update?: XOR<XOR<EksemplarBukuUpdateToOneWithWhereWithoutPeminjamanInput, EksemplarBukuUpdateWithoutPeminjamanInput>, EksemplarBukuUncheckedUpdateWithoutPeminjamanInput>
  }

  export type BukuCreateNestedOneWithoutKategoriInput = {
    create?: XOR<BukuCreateWithoutKategoriInput, BukuUncheckedCreateWithoutKategoriInput>
    connectOrCreate?: BukuCreateOrConnectWithoutKategoriInput
    connect?: BukuWhereUniqueInput
  }

  export type KategoriCreateNestedOneWithoutBukuInput = {
    create?: XOR<KategoriCreateWithoutBukuInput, KategoriUncheckedCreateWithoutBukuInput>
    connectOrCreate?: KategoriCreateOrConnectWithoutBukuInput
    connect?: KategoriWhereUniqueInput
  }

  export type BukuUpdateOneRequiredWithoutKategoriNestedInput = {
    create?: XOR<BukuCreateWithoutKategoriInput, BukuUncheckedCreateWithoutKategoriInput>
    connectOrCreate?: BukuCreateOrConnectWithoutKategoriInput
    upsert?: BukuUpsertWithoutKategoriInput
    connect?: BukuWhereUniqueInput
    update?: XOR<XOR<BukuUpdateToOneWithWhereWithoutKategoriInput, BukuUpdateWithoutKategoriInput>, BukuUncheckedUpdateWithoutKategoriInput>
  }

  export type KategoriUpdateOneRequiredWithoutBukuNestedInput = {
    create?: XOR<KategoriCreateWithoutBukuInput, KategoriUncheckedCreateWithoutBukuInput>
    connectOrCreate?: KategoriCreateOrConnectWithoutBukuInput
    upsert?: KategoriUpsertWithoutBukuInput
    connect?: KategoriWhereUniqueInput
    update?: XOR<XOR<KategoriUpdateToOneWithWhereWithoutBukuInput, KategoriUpdateWithoutBukuInput>, KategoriUncheckedUpdateWithoutBukuInput>
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

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
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

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
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

  export type NestedEnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type PeminjamanCreateWithoutUserInput = {
    tanggalPinjam?: Date | string
    tanggalKembali: Date | string
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    eksemplar: EksemplarBukuCreateNestedOneWithoutPeminjamanInput
  }

  export type PeminjamanUncheckedCreateWithoutUserInput = {
    id?: number
    eksemplarId: number
    tanggalPinjam?: Date | string
    tanggalKembali: Date | string
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PeminjamanCreateOrConnectWithoutUserInput = {
    where: PeminjamanWhereUniqueInput
    create: XOR<PeminjamanCreateWithoutUserInput, PeminjamanUncheckedCreateWithoutUserInput>
  }

  export type PeminjamanCreateManyUserInputEnvelope = {
    data: PeminjamanCreateManyUserInput | PeminjamanCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PeminjamanUpsertWithWhereUniqueWithoutUserInput = {
    where: PeminjamanWhereUniqueInput
    update: XOR<PeminjamanUpdateWithoutUserInput, PeminjamanUncheckedUpdateWithoutUserInput>
    create: XOR<PeminjamanCreateWithoutUserInput, PeminjamanUncheckedCreateWithoutUserInput>
  }

  export type PeminjamanUpdateWithWhereUniqueWithoutUserInput = {
    where: PeminjamanWhereUniqueInput
    data: XOR<PeminjamanUpdateWithoutUserInput, PeminjamanUncheckedUpdateWithoutUserInput>
  }

  export type PeminjamanUpdateManyWithWhereWithoutUserInput = {
    where: PeminjamanScalarWhereInput
    data: XOR<PeminjamanUpdateManyMutationInput, PeminjamanUncheckedUpdateManyWithoutUserInput>
  }

  export type PeminjamanScalarWhereInput = {
    AND?: PeminjamanScalarWhereInput | PeminjamanScalarWhereInput[]
    OR?: PeminjamanScalarWhereInput[]
    NOT?: PeminjamanScalarWhereInput | PeminjamanScalarWhereInput[]
    id?: IntFilter<"Peminjaman"> | number
    userId?: IntFilter<"Peminjaman"> | number
    eksemplarId?: IntFilter<"Peminjaman"> | number
    tanggalPinjam?: DateTimeFilter<"Peminjaman"> | Date | string
    tanggalKembali?: DateTimeFilter<"Peminjaman"> | Date | string
    status?: EnumStatusFilter<"Peminjaman"> | $Enums.Status
    createdAt?: DateTimeFilter<"Peminjaman"> | Date | string
    updatedAt?: DateTimeFilter<"Peminjaman"> | Date | string
  }

  export type EksemplarBukuCreateWithoutBukuInput = {
    kodeEksemplar: string
    status?: $Enums.Status
    isArchived?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    peminjaman?: PeminjamanCreateNestedManyWithoutEksemplarInput
  }

  export type EksemplarBukuUncheckedCreateWithoutBukuInput = {
    id?: number
    kodeEksemplar: string
    status?: $Enums.Status
    isArchived?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    peminjaman?: PeminjamanUncheckedCreateNestedManyWithoutEksemplarInput
  }

  export type EksemplarBukuCreateOrConnectWithoutBukuInput = {
    where: EksemplarBukuWhereUniqueInput
    create: XOR<EksemplarBukuCreateWithoutBukuInput, EksemplarBukuUncheckedCreateWithoutBukuInput>
  }

  export type EksemplarBukuCreateManyBukuInputEnvelope = {
    data: EksemplarBukuCreateManyBukuInput | EksemplarBukuCreateManyBukuInput[]
    skipDuplicates?: boolean
  }

  export type BukuKategoriCreateWithoutBukuInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    kategori: KategoriCreateNestedOneWithoutBukuInput
  }

  export type BukuKategoriUncheckedCreateWithoutBukuInput = {
    id?: number
    kategoriId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BukuKategoriCreateOrConnectWithoutBukuInput = {
    where: BukuKategoriWhereUniqueInput
    create: XOR<BukuKategoriCreateWithoutBukuInput, BukuKategoriUncheckedCreateWithoutBukuInput>
  }

  export type BukuKategoriCreateManyBukuInputEnvelope = {
    data: BukuKategoriCreateManyBukuInput | BukuKategoriCreateManyBukuInput[]
    skipDuplicates?: boolean
  }

  export type EksemplarBukuUpsertWithWhereUniqueWithoutBukuInput = {
    where: EksemplarBukuWhereUniqueInput
    update: XOR<EksemplarBukuUpdateWithoutBukuInput, EksemplarBukuUncheckedUpdateWithoutBukuInput>
    create: XOR<EksemplarBukuCreateWithoutBukuInput, EksemplarBukuUncheckedCreateWithoutBukuInput>
  }

  export type EksemplarBukuUpdateWithWhereUniqueWithoutBukuInput = {
    where: EksemplarBukuWhereUniqueInput
    data: XOR<EksemplarBukuUpdateWithoutBukuInput, EksemplarBukuUncheckedUpdateWithoutBukuInput>
  }

  export type EksemplarBukuUpdateManyWithWhereWithoutBukuInput = {
    where: EksemplarBukuScalarWhereInput
    data: XOR<EksemplarBukuUpdateManyMutationInput, EksemplarBukuUncheckedUpdateManyWithoutBukuInput>
  }

  export type EksemplarBukuScalarWhereInput = {
    AND?: EksemplarBukuScalarWhereInput | EksemplarBukuScalarWhereInput[]
    OR?: EksemplarBukuScalarWhereInput[]
    NOT?: EksemplarBukuScalarWhereInput | EksemplarBukuScalarWhereInput[]
    id?: IntFilter<"EksemplarBuku"> | number
    kodeEksemplar?: StringFilter<"EksemplarBuku"> | string
    bukuId?: IntFilter<"EksemplarBuku"> | number
    status?: EnumStatusFilter<"EksemplarBuku"> | $Enums.Status
    isArchived?: BoolFilter<"EksemplarBuku"> | boolean
    createdAt?: DateTimeFilter<"EksemplarBuku"> | Date | string
    updatedAt?: DateTimeFilter<"EksemplarBuku"> | Date | string
  }

  export type BukuKategoriUpsertWithWhereUniqueWithoutBukuInput = {
    where: BukuKategoriWhereUniqueInput
    update: XOR<BukuKategoriUpdateWithoutBukuInput, BukuKategoriUncheckedUpdateWithoutBukuInput>
    create: XOR<BukuKategoriCreateWithoutBukuInput, BukuKategoriUncheckedCreateWithoutBukuInput>
  }

  export type BukuKategoriUpdateWithWhereUniqueWithoutBukuInput = {
    where: BukuKategoriWhereUniqueInput
    data: XOR<BukuKategoriUpdateWithoutBukuInput, BukuKategoriUncheckedUpdateWithoutBukuInput>
  }

  export type BukuKategoriUpdateManyWithWhereWithoutBukuInput = {
    where: BukuKategoriScalarWhereInput
    data: XOR<BukuKategoriUpdateManyMutationInput, BukuKategoriUncheckedUpdateManyWithoutBukuInput>
  }

  export type BukuKategoriScalarWhereInput = {
    AND?: BukuKategoriScalarWhereInput | BukuKategoriScalarWhereInput[]
    OR?: BukuKategoriScalarWhereInput[]
    NOT?: BukuKategoriScalarWhereInput | BukuKategoriScalarWhereInput[]
    id?: IntFilter<"BukuKategori"> | number
    idBuku?: IntFilter<"BukuKategori"> | number
    kategoriId?: IntFilter<"BukuKategori"> | number
    createdAt?: DateTimeFilter<"BukuKategori"> | Date | string
    updatedAt?: DateTimeFilter<"BukuKategori"> | Date | string
  }

  export type BukuKategoriCreateWithoutKategoriInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    buku: BukuCreateNestedOneWithoutKategoriInput
  }

  export type BukuKategoriUncheckedCreateWithoutKategoriInput = {
    id?: number
    idBuku: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BukuKategoriCreateOrConnectWithoutKategoriInput = {
    where: BukuKategoriWhereUniqueInput
    create: XOR<BukuKategoriCreateWithoutKategoriInput, BukuKategoriUncheckedCreateWithoutKategoriInput>
  }

  export type BukuKategoriCreateManyKategoriInputEnvelope = {
    data: BukuKategoriCreateManyKategoriInput | BukuKategoriCreateManyKategoriInput[]
    skipDuplicates?: boolean
  }

  export type BukuKategoriUpsertWithWhereUniqueWithoutKategoriInput = {
    where: BukuKategoriWhereUniqueInput
    update: XOR<BukuKategoriUpdateWithoutKategoriInput, BukuKategoriUncheckedUpdateWithoutKategoriInput>
    create: XOR<BukuKategoriCreateWithoutKategoriInput, BukuKategoriUncheckedCreateWithoutKategoriInput>
  }

  export type BukuKategoriUpdateWithWhereUniqueWithoutKategoriInput = {
    where: BukuKategoriWhereUniqueInput
    data: XOR<BukuKategoriUpdateWithoutKategoriInput, BukuKategoriUncheckedUpdateWithoutKategoriInput>
  }

  export type BukuKategoriUpdateManyWithWhereWithoutKategoriInput = {
    where: BukuKategoriScalarWhereInput
    data: XOR<BukuKategoriUpdateManyMutationInput, BukuKategoriUncheckedUpdateManyWithoutKategoriInput>
  }

  export type BukuCreateWithoutEksemplarBukuInput = {
    judul: string
    pengarang: string
    penerbit: string
    tahunTerbit: number
    jumlahBuku: number
    createdAt?: Date | string
    updatedAt?: Date | string
    kategori?: BukuKategoriCreateNestedManyWithoutBukuInput
  }

  export type BukuUncheckedCreateWithoutEksemplarBukuInput = {
    id?: number
    judul: string
    pengarang: string
    penerbit: string
    tahunTerbit: number
    jumlahBuku: number
    createdAt?: Date | string
    updatedAt?: Date | string
    kategori?: BukuKategoriUncheckedCreateNestedManyWithoutBukuInput
  }

  export type BukuCreateOrConnectWithoutEksemplarBukuInput = {
    where: BukuWhereUniqueInput
    create: XOR<BukuCreateWithoutEksemplarBukuInput, BukuUncheckedCreateWithoutEksemplarBukuInput>
  }

  export type PeminjamanCreateWithoutEksemplarInput = {
    tanggalPinjam?: Date | string
    tanggalKembali: Date | string
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutPeminjamanInput
  }

  export type PeminjamanUncheckedCreateWithoutEksemplarInput = {
    id?: number
    userId: number
    tanggalPinjam?: Date | string
    tanggalKembali: Date | string
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PeminjamanCreateOrConnectWithoutEksemplarInput = {
    where: PeminjamanWhereUniqueInput
    create: XOR<PeminjamanCreateWithoutEksemplarInput, PeminjamanUncheckedCreateWithoutEksemplarInput>
  }

  export type PeminjamanCreateManyEksemplarInputEnvelope = {
    data: PeminjamanCreateManyEksemplarInput | PeminjamanCreateManyEksemplarInput[]
    skipDuplicates?: boolean
  }

  export type BukuUpsertWithoutEksemplarBukuInput = {
    update: XOR<BukuUpdateWithoutEksemplarBukuInput, BukuUncheckedUpdateWithoutEksemplarBukuInput>
    create: XOR<BukuCreateWithoutEksemplarBukuInput, BukuUncheckedCreateWithoutEksemplarBukuInput>
    where?: BukuWhereInput
  }

  export type BukuUpdateToOneWithWhereWithoutEksemplarBukuInput = {
    where?: BukuWhereInput
    data: XOR<BukuUpdateWithoutEksemplarBukuInput, BukuUncheckedUpdateWithoutEksemplarBukuInput>
  }

  export type BukuUpdateWithoutEksemplarBukuInput = {
    judul?: StringFieldUpdateOperationsInput | string
    pengarang?: StringFieldUpdateOperationsInput | string
    penerbit?: StringFieldUpdateOperationsInput | string
    tahunTerbit?: IntFieldUpdateOperationsInput | number
    jumlahBuku?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    kategori?: BukuKategoriUpdateManyWithoutBukuNestedInput
  }

  export type BukuUncheckedUpdateWithoutEksemplarBukuInput = {
    id?: IntFieldUpdateOperationsInput | number
    judul?: StringFieldUpdateOperationsInput | string
    pengarang?: StringFieldUpdateOperationsInput | string
    penerbit?: StringFieldUpdateOperationsInput | string
    tahunTerbit?: IntFieldUpdateOperationsInput | number
    jumlahBuku?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    kategori?: BukuKategoriUncheckedUpdateManyWithoutBukuNestedInput
  }

  export type PeminjamanUpsertWithWhereUniqueWithoutEksemplarInput = {
    where: PeminjamanWhereUniqueInput
    update: XOR<PeminjamanUpdateWithoutEksemplarInput, PeminjamanUncheckedUpdateWithoutEksemplarInput>
    create: XOR<PeminjamanCreateWithoutEksemplarInput, PeminjamanUncheckedCreateWithoutEksemplarInput>
  }

  export type PeminjamanUpdateWithWhereUniqueWithoutEksemplarInput = {
    where: PeminjamanWhereUniqueInput
    data: XOR<PeminjamanUpdateWithoutEksemplarInput, PeminjamanUncheckedUpdateWithoutEksemplarInput>
  }

  export type PeminjamanUpdateManyWithWhereWithoutEksemplarInput = {
    where: PeminjamanScalarWhereInput
    data: XOR<PeminjamanUpdateManyMutationInput, PeminjamanUncheckedUpdateManyWithoutEksemplarInput>
  }

  export type UserCreateWithoutPeminjamanInput = {
    name: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateWithoutPeminjamanInput = {
    id?: number
    name: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateOrConnectWithoutPeminjamanInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPeminjamanInput, UserUncheckedCreateWithoutPeminjamanInput>
  }

  export type EksemplarBukuCreateWithoutPeminjamanInput = {
    kodeEksemplar: string
    status?: $Enums.Status
    isArchived?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    buku: BukuCreateNestedOneWithoutEksemplarBukuInput
  }

  export type EksemplarBukuUncheckedCreateWithoutPeminjamanInput = {
    id?: number
    kodeEksemplar: string
    bukuId: number
    status?: $Enums.Status
    isArchived?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EksemplarBukuCreateOrConnectWithoutPeminjamanInput = {
    where: EksemplarBukuWhereUniqueInput
    create: XOR<EksemplarBukuCreateWithoutPeminjamanInput, EksemplarBukuUncheckedCreateWithoutPeminjamanInput>
  }

  export type UserUpsertWithoutPeminjamanInput = {
    update: XOR<UserUpdateWithoutPeminjamanInput, UserUncheckedUpdateWithoutPeminjamanInput>
    create: XOR<UserCreateWithoutPeminjamanInput, UserUncheckedCreateWithoutPeminjamanInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPeminjamanInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPeminjamanInput, UserUncheckedUpdateWithoutPeminjamanInput>
  }

  export type UserUpdateWithoutPeminjamanInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutPeminjamanInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EksemplarBukuUpsertWithoutPeminjamanInput = {
    update: XOR<EksemplarBukuUpdateWithoutPeminjamanInput, EksemplarBukuUncheckedUpdateWithoutPeminjamanInput>
    create: XOR<EksemplarBukuCreateWithoutPeminjamanInput, EksemplarBukuUncheckedCreateWithoutPeminjamanInput>
    where?: EksemplarBukuWhereInput
  }

  export type EksemplarBukuUpdateToOneWithWhereWithoutPeminjamanInput = {
    where?: EksemplarBukuWhereInput
    data: XOR<EksemplarBukuUpdateWithoutPeminjamanInput, EksemplarBukuUncheckedUpdateWithoutPeminjamanInput>
  }

  export type EksemplarBukuUpdateWithoutPeminjamanInput = {
    kodeEksemplar?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    buku?: BukuUpdateOneRequiredWithoutEksemplarBukuNestedInput
  }

  export type EksemplarBukuUncheckedUpdateWithoutPeminjamanInput = {
    id?: IntFieldUpdateOperationsInput | number
    kodeEksemplar?: StringFieldUpdateOperationsInput | string
    bukuId?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BukuCreateWithoutKategoriInput = {
    judul: string
    pengarang: string
    penerbit: string
    tahunTerbit: number
    jumlahBuku: number
    createdAt?: Date | string
    updatedAt?: Date | string
    eksemplarBuku?: EksemplarBukuCreateNestedManyWithoutBukuInput
  }

  export type BukuUncheckedCreateWithoutKategoriInput = {
    id?: number
    judul: string
    pengarang: string
    penerbit: string
    tahunTerbit: number
    jumlahBuku: number
    createdAt?: Date | string
    updatedAt?: Date | string
    eksemplarBuku?: EksemplarBukuUncheckedCreateNestedManyWithoutBukuInput
  }

  export type BukuCreateOrConnectWithoutKategoriInput = {
    where: BukuWhereUniqueInput
    create: XOR<BukuCreateWithoutKategoriInput, BukuUncheckedCreateWithoutKategoriInput>
  }

  export type KategoriCreateWithoutBukuInput = {
    nama: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type KategoriUncheckedCreateWithoutBukuInput = {
    id?: number
    nama: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type KategoriCreateOrConnectWithoutBukuInput = {
    where: KategoriWhereUniqueInput
    create: XOR<KategoriCreateWithoutBukuInput, KategoriUncheckedCreateWithoutBukuInput>
  }

  export type BukuUpsertWithoutKategoriInput = {
    update: XOR<BukuUpdateWithoutKategoriInput, BukuUncheckedUpdateWithoutKategoriInput>
    create: XOR<BukuCreateWithoutKategoriInput, BukuUncheckedCreateWithoutKategoriInput>
    where?: BukuWhereInput
  }

  export type BukuUpdateToOneWithWhereWithoutKategoriInput = {
    where?: BukuWhereInput
    data: XOR<BukuUpdateWithoutKategoriInput, BukuUncheckedUpdateWithoutKategoriInput>
  }

  export type BukuUpdateWithoutKategoriInput = {
    judul?: StringFieldUpdateOperationsInput | string
    pengarang?: StringFieldUpdateOperationsInput | string
    penerbit?: StringFieldUpdateOperationsInput | string
    tahunTerbit?: IntFieldUpdateOperationsInput | number
    jumlahBuku?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    eksemplarBuku?: EksemplarBukuUpdateManyWithoutBukuNestedInput
  }

  export type BukuUncheckedUpdateWithoutKategoriInput = {
    id?: IntFieldUpdateOperationsInput | number
    judul?: StringFieldUpdateOperationsInput | string
    pengarang?: StringFieldUpdateOperationsInput | string
    penerbit?: StringFieldUpdateOperationsInput | string
    tahunTerbit?: IntFieldUpdateOperationsInput | number
    jumlahBuku?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    eksemplarBuku?: EksemplarBukuUncheckedUpdateManyWithoutBukuNestedInput
  }

  export type KategoriUpsertWithoutBukuInput = {
    update: XOR<KategoriUpdateWithoutBukuInput, KategoriUncheckedUpdateWithoutBukuInput>
    create: XOR<KategoriCreateWithoutBukuInput, KategoriUncheckedCreateWithoutBukuInput>
    where?: KategoriWhereInput
  }

  export type KategoriUpdateToOneWithWhereWithoutBukuInput = {
    where?: KategoriWhereInput
    data: XOR<KategoriUpdateWithoutBukuInput, KategoriUncheckedUpdateWithoutBukuInput>
  }

  export type KategoriUpdateWithoutBukuInput = {
    nama?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KategoriUncheckedUpdateWithoutBukuInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PeminjamanCreateManyUserInput = {
    id?: number
    eksemplarId: number
    tanggalPinjam?: Date | string
    tanggalKembali: Date | string
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PeminjamanUpdateWithoutUserInput = {
    tanggalPinjam?: DateTimeFieldUpdateOperationsInput | Date | string
    tanggalKembali?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    eksemplar?: EksemplarBukuUpdateOneRequiredWithoutPeminjamanNestedInput
  }

  export type PeminjamanUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    eksemplarId?: IntFieldUpdateOperationsInput | number
    tanggalPinjam?: DateTimeFieldUpdateOperationsInput | Date | string
    tanggalKembali?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PeminjamanUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    eksemplarId?: IntFieldUpdateOperationsInput | number
    tanggalPinjam?: DateTimeFieldUpdateOperationsInput | Date | string
    tanggalKembali?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EksemplarBukuCreateManyBukuInput = {
    id?: number
    kodeEksemplar: string
    status?: $Enums.Status
    isArchived?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BukuKategoriCreateManyBukuInput = {
    id?: number
    kategoriId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EksemplarBukuUpdateWithoutBukuInput = {
    kodeEksemplar?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    peminjaman?: PeminjamanUpdateManyWithoutEksemplarNestedInput
  }

  export type EksemplarBukuUncheckedUpdateWithoutBukuInput = {
    id?: IntFieldUpdateOperationsInput | number
    kodeEksemplar?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    peminjaman?: PeminjamanUncheckedUpdateManyWithoutEksemplarNestedInput
  }

  export type EksemplarBukuUncheckedUpdateManyWithoutBukuInput = {
    id?: IntFieldUpdateOperationsInput | number
    kodeEksemplar?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BukuKategoriUpdateWithoutBukuInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    kategori?: KategoriUpdateOneRequiredWithoutBukuNestedInput
  }

  export type BukuKategoriUncheckedUpdateWithoutBukuInput = {
    id?: IntFieldUpdateOperationsInput | number
    kategoriId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BukuKategoriUncheckedUpdateManyWithoutBukuInput = {
    id?: IntFieldUpdateOperationsInput | number
    kategoriId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BukuKategoriCreateManyKategoriInput = {
    id?: number
    idBuku: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BukuKategoriUpdateWithoutKategoriInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    buku?: BukuUpdateOneRequiredWithoutKategoriNestedInput
  }

  export type BukuKategoriUncheckedUpdateWithoutKategoriInput = {
    id?: IntFieldUpdateOperationsInput | number
    idBuku?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BukuKategoriUncheckedUpdateManyWithoutKategoriInput = {
    id?: IntFieldUpdateOperationsInput | number
    idBuku?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PeminjamanCreateManyEksemplarInput = {
    id?: number
    userId: number
    tanggalPinjam?: Date | string
    tanggalKembali: Date | string
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PeminjamanUpdateWithoutEksemplarInput = {
    tanggalPinjam?: DateTimeFieldUpdateOperationsInput | Date | string
    tanggalKembali?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPeminjamanNestedInput
  }

  export type PeminjamanUncheckedUpdateWithoutEksemplarInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    tanggalPinjam?: DateTimeFieldUpdateOperationsInput | Date | string
    tanggalKembali?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PeminjamanUncheckedUpdateManyWithoutEksemplarInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    tanggalPinjam?: DateTimeFieldUpdateOperationsInput | Date | string
    tanggalKembali?: DateTimeFieldUpdateOperationsInput | Date | string
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