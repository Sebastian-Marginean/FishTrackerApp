declare const Deno: {
  serve(handler: (request: Request) => Response | Promise<Response>): void;
  env: {
    get(name: string): string | undefined;
  };
};

declare module 'npm:@supabase/supabase-js@2' {
  export function createClient(...args: any[]): any;
}