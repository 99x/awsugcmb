/* tslint:disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation } from "@aws-amplify/api";
import { GraphQLResult } from "@aws-amplify/api/lib/types";
import * as Observable from "zen-observable";

export type CreateHeroInput = {
  id?: string | null;
  name: string;
  power?: string | null;
  status?: boolean | null;
};

export type UpdateHeroInput = {
  id: string;
  name?: string | null;
  power?: string | null;
  status?: boolean | null;
};

export type DeleteHeroInput = {
  id?: string | null;
};

export type ModelHeroFilterInput = {
  id?: ModelIDFilterInput | null;
  name?: ModelStringFilterInput | null;
  power?: ModelStringFilterInput | null;
  status?: ModelBooleanFilterInput | null;
  and?: Array<ModelHeroFilterInput | null> | null;
  or?: Array<ModelHeroFilterInput | null> | null;
  not?: ModelHeroFilterInput | null;
};

export type ModelIDFilterInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
};

export type ModelStringFilterInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
};

export type ModelBooleanFilterInput = {
  ne?: boolean | null;
  eq?: boolean | null;
};

export type SearchableHeroFilterInput = {
  id?: SearchableIDFilterInput | null;
  name?: SearchableStringFilterInput | null;
  power?: SearchableStringFilterInput | null;
  status?: SearchableBooleanFilterInput | null;
  and?: Array<SearchableHeroFilterInput | null> | null;
  or?: Array<SearchableHeroFilterInput | null> | null;
  not?: SearchableHeroFilterInput | null;
};

export type SearchableIDFilterInput = {
  ne?: string | null;
  eq?: string | null;
  match?: string | null;
  matchPhrase?: string | null;
  matchPhrasePrefix?: string | null;
  multiMatch?: string | null;
  exists?: boolean | null;
  wildcard?: string | null;
  regexp?: string | null;
};

export type SearchableStringFilterInput = {
  ne?: string | null;
  eq?: string | null;
  match?: string | null;
  matchPhrase?: string | null;
  matchPhrasePrefix?: string | null;
  multiMatch?: string | null;
  exists?: boolean | null;
  wildcard?: string | null;
  regexp?: string | null;
};

export type SearchableBooleanFilterInput = {
  eq?: boolean | null;
  ne?: boolean | null;
};

export type SearchableHeroSortInput = {
  field?: SearchableHeroSortableFields | null;
  direction?: SearchableSortDirection | null;
};

export enum SearchableHeroSortableFields {
  id = "id",
  name = "name",
  power = "power",
  status = "status"
}

export enum SearchableSortDirection {
  asc = "asc",
  desc = "desc"
}

export type CreateHeroMutation = {
  __typename: "Hero";
  id: string;
  name: string;
  power: string | null;
  status: boolean | null;
};

export type UpdateHeroMutation = {
  __typename: "Hero";
  id: string;
  name: string;
  power: string | null;
  status: boolean | null;
};

export type DeleteHeroMutation = {
  __typename: "Hero";
  id: string;
  name: string;
  power: string | null;
  status: boolean | null;
};

export type GetHeroQuery = {
  __typename: "Hero";
  id: string;
  name: string;
  power: string | null;
  status: boolean | null;
};

export type ListHerosQuery = {
  __typename: "ModelHeroConnection";
  items: Array<{
    __typename: "Hero";
    id: string;
    name: string;
    power: string | null;
    status: boolean | null;
  } | null> | null;
  nextToken: string | null;
};

export type SearchHerosQuery = {
  __typename: "SearchableHeroConnection";
  items: Array<{
    __typename: "Hero";
    id: string;
    name: string;
    power: string | null;
    status: boolean | null;
  } | null> | null;
  nextToken: string | null;
};

export type OnCreateHeroSubscription = {
  __typename: "Hero";
  id: string;
  name: string;
  power: string | null;
  status: boolean | null;
};

export type OnUpdateHeroSubscription = {
  __typename: "Hero";
  id: string;
  name: string;
  power: string | null;
  status: boolean | null;
};

export type OnDeleteHeroSubscription = {
  __typename: "Hero";
  id: string;
  name: string;
  power: string | null;
  status: boolean | null;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateHero(input: CreateHeroInput): Promise<CreateHeroMutation> {
    const statement = `mutation CreateHero($input: CreateHeroInput!) {
        createHero(input: $input) {
          __typename
          id
          name
          power
          status
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateHeroMutation>response.data.createHero;
  }
  async UpdateHero(input: UpdateHeroInput): Promise<UpdateHeroMutation> {
    const statement = `mutation UpdateHero($input: UpdateHeroInput!) {
        updateHero(input: $input) {
          __typename
          id
          name
          power
          status
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateHeroMutation>response.data.updateHero;
  }
  async DeleteHero(input: DeleteHeroInput): Promise<DeleteHeroMutation> {
    const statement = `mutation DeleteHero($input: DeleteHeroInput!) {
        deleteHero(input: $input) {
          __typename
          id
          name
          power
          status
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteHeroMutation>response.data.deleteHero;
  }
  async GetHero(id: string): Promise<GetHeroQuery> {
    const statement = `query GetHero($id: ID!) {
        getHero(id: $id) {
          __typename
          id
          name
          power
          status
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetHeroQuery>response.data.getHero;
  }
  async ListHeros(
    filter?: ModelHeroFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListHerosQuery> {
    const statement = `query ListHeros($filter: ModelHeroFilterInput, $limit: Int, $nextToken: String) {
        listHeros(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            power
            status
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListHerosQuery>response.data.listHeros;
  }
  async SearchHeros(
    filter?: SearchableHeroFilterInput,
    sort?: SearchableHeroSortInput,
    limit?: number,
    nextToken?: string
  ): Promise<SearchHerosQuery> {
    const statement = `query SearchHeros($filter: SearchableHeroFilterInput, $sort: SearchableHeroSortInput, $limit: Int, $nextToken: String) {
        searchHeros(filter: $filter, sort: $sort, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            power
            status
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (sort) {
      gqlAPIServiceArguments.sort = sort;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <SearchHerosQuery>response.data.searchHeros;
  }
  OnCreateHeroListener: Observable<OnCreateHeroSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnCreateHero {
        onCreateHero {
          __typename
          id
          name
          power
          status
        }
      }`
    )
  ) as Observable<OnCreateHeroSubscription>;

  OnUpdateHeroListener: Observable<OnUpdateHeroSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnUpdateHero {
        onUpdateHero {
          __typename
          id
          name
          power
          status
        }
      }`
    )
  ) as Observable<OnUpdateHeroSubscription>;

  OnDeleteHeroListener: Observable<OnDeleteHeroSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnDeleteHero {
        onDeleteHero {
          __typename
          id
          name
          power
          status
        }
      }`
    )
  ) as Observable<OnDeleteHeroSubscription>;
}
