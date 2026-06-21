import _ from 'lodash';

// 支持的模型列表，基于官方API返回的模型
const SUPPORTED_MODELS = [
    {
        "id": "qwen3.7-max",
        "name": "Qwen3.7-Max",
        "object": "model",
        "owned_by": "qwen-free-api",
        "description": "千问最新旗舰模型，擅长代码编写，处理复杂任务"
    },
    {
        "id": "qwen3.5-plus",
        "name": "Qwen3.5-Plus",
        "object": "model",
        "owned_by": "qwen-free-api",
        "description": "千问系列最新大语言模型，支持文本和多模态任务"
    },
    {
        "id": "qwen3.5-flash",
        "name": "Qwen3.5-Flash",
        "object": "model",
        "owned_by": "qwen-free-api",
        "description": "适用于简单任务，响应速度快"
    },
    {
        "id": "qwen3-max",
        "name": "Qwen3-Max",
        "object": "model",
        "owned_by": "qwen-free-api",
        "description": "适用于日常通用型任务，综合能力均衡"
    },
    {
        "id": "qwen3-max-thinking-preview",
        "name": "Qwen3-Max-Thinking",
        "object": "model",
        "owned_by": "qwen-free-api",
        "description": "适用于多步骤推理与问题分析"
    },
    {
        "id": "qwen3-235b-a22b",
        "name": "Qwen3-235B-A22B-2507",
        "object": "model",
        "owned_by": "qwen-free-api",
        "description": "最强大的混合专家语言模型，支持思维预算机制"
    },
    {
        "id": "qwen3-coder-plus",
        "name": "Qwen3-Coder",
        "object": "model",
        "owned_by": "qwen-free-api",
        "description": "强大的编程专用语言模型，擅长代码生成和工具使用"
    },
    {
        "id": "qwen3-30b-a3b",
        "name": "Qwen3-30B-A3B-2507",
        "object": "model",
        "owned_by": "qwen-free-api",
        "description": "紧凑高性能的混合专家模型"
    },
    {
        "id": "qwen3-coder-30b-a3b-instruct",
        "name": "Qwen3-Coder-Flash",
        "object": "model",
        "owned_by": "qwen-free-api",
        "description": "快速准确的代码生成模型"
    },
];

export default {

    prefix: '/v1',

    get: {
        '/models': async () => {
            return {
                "data": SUPPORTED_MODELS
            };
        }

    }
}

// 导出模型验证函数
export function isValidModel(modelId: string): boolean {
    return SUPPORTED_MODELS.some(model => model.id === modelId);
}

// 导出默认模型
export const DEFAULT_MODEL = "qwen3-235b-a22b";
