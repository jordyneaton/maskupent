import { NextResponse } from 'next/server'

export async function GET() {
  const apiDocs = {
    openapi: '3.0.0',
    info: {
      title: 'Music Releases API',
      version: '1.0.0',
      description: 'API for managing music releases and artists'
    },
    servers: [
      {
        url: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000',
        description: 'API Server'
      }
    ],
    paths: {
      '/api/releases': {
        get: {
          summary: 'Get all releases',
          description: 'Retrieve a list of all music releases',
          responses: {
            '200': {
              description: 'Successful response',
              content: {
                'application/json': {
                  schema: {
                    type: 'array',
                    items: {
                      $ref: '#/components/schemas/Release'
                    }
                  }
                }
              }
            },
            '500': {
              description: 'Server error'
            }
          }
        }
      },
      '/api/releases/{id}': {
        get: {
          summary: 'Get a single release',
          parameters: [
            {
              name: 'id',
              in: 'path',
              required: true,
              schema: {
                type: 'string'
              }
            }
          ],
          responses: {
            '200': {
              description: 'Successful response',
              content: {
                'application/json': {
                  schema: {
                    $ref: '#/components/schemas/Release'
                  }
                }
              }
            },
            '404': {
              description: 'Release not found'
            },
            '500': {
              description: 'Server error'
            }
          }
        }
      },
      '/api/artists': {
        get: {
          summary: 'Get all artists',
          responses: {
            '200': {
              description: 'Successful response',
              content: {
                'application/json': {
                  schema: {
                    type: 'array',
                    items: {
                      $ref: '#/components/schemas/Artist'
                    }
                  }
                }
              }
            },
            '500': {
              description: 'Server error'
            }
          }
        }
      },
      '/api/artists/{id}': {
        get: {
          summary: 'Get a single artist',
          parameters: [
            {
              name: 'id',
              in: 'path',
              required: true,
              schema: {
                type: 'string'
              }
            }
          ],
          responses: {
            '200': {
              description: 'Successful response',
              content: {
                'application/json': {
                  schema: {
                    $ref: '#/components/schemas/Artist'
                  }
                }
              }
            },
            '404': {
              description: 'Artist not found'
            },
            '500': {
              description: 'Server error'
            }
          }
        }
      },
      '/api/newsletter': {
        post: {
          summary: 'Subscribe to newsletter',
          requestBody: {
            required: true,
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    email: {
                      type: 'string',
                      format: 'email'
                    }
                  },
                  required: ['email']
                }
              }
            }
          },
          responses: {
            '201': {
              description: 'Successfully subscribed'
            },
            '400': {
              description: 'Invalid email address'
            },
            '500': {
              description: 'Server error'
            }
          }
        }
      }
    },
    components: {
      schemas: {
        Release: {
          type: 'object',
          properties: {
            id: {
              type: 'string'
            },
            title: {
              type: 'string'
            },
            releaseDate: {
              type: 'string',
              format: 'date-time'
            },
            coverImageUrl: {
              type: 'string'
            },
            artistId: {
              type: 'string'
            },
            artist: {
              $ref: '#/components/schemas/Artist'
            }
          }
        },
        Artist: {
          type: 'object',
          properties: {
            id: {
              type: 'string'
            },
            name: {
              type: 'string'
            },
            bio: {
              type: 'string'
            },
            imageUrl: {
              type: 'string'
            }
          }
        }
      }
    }
  }

  return NextResponse.json(apiDocs)
} 